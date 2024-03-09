import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import SkeletonCard from "../components/SkeletonCard";
import { setLoading } from "@/redux/slices";
import { fetchDetectiveData, purchaseComponent } from "@/services/detective";
import { Navbar } from "../components/TeamInfo";
import CardComponent from "../components/CardComponent";

export default function CardWithForm() {
  const detective = JSON.parse(localStorage.getItem("detective"));

  const dispatch = useDispatch();
  const [isChanged, setIsChanged] = useState(false);
  const [components, setComponents] = useState([]);
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchComponents = async () => {
      dispatch(setLoading(true));
      try {
        const [componentsResponse] = await Promise.all([
          axios.get(import.meta.env.VITE_API_GET_COMPONENTS),
        ]);
        setComponents(componentsResponse.data);
      } catch (error) {
        console.error("Error fetching component data:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchComponents();
    fetchDetectiveData(dispatch, detective.email);
  }, []);

  useEffect(() => {
    fetchDetectiveData(dispatch, detective.email);
  }, [isChanged]);

  const handlePurchase = async (componentID) => {
    await purchaseComponent(componentID, detective.email);
    setIsChanged(!isChanged);
  };

  return (
    <>
      <div className="flex flex-col w-[100vw] justify-center items-center gap-2">
        <Navbar isChanged={isChanged} setIsChanged={setIsChanged}></Navbar>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-wrap justify-center items-center gap-7 mt-6 my-3">
            {loading ? (
              <SkeletonCard />
            ) : (
              components.map(
                ({ componentId, name, image, price, points, link }) => (
                  <CardComponent
                    key={componentId}
                    componentId={componentId}
                    name={name}
                    image={image}
                    price={price}
                    points={points}
                    link={link}
                    detective={detective}
                    handlePurchase={handlePurchase}
                  />
                )
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
