import { setUser } from "@/redux/slices";
import axios from "axios";
import { toast } from "sonner";

const fetchDetectiveData = async (dispatch, email) => {
  try {
    const response = await axios.post(import.meta.env.VITE_API_GET_DETECTIVE, {
      email,
    });

    response.data.purchaseItems = response.data.purchaseItems || [];

    dispatch(setUser(response.data));
    localStorage.removeItem("detective");
    localStorage.setItem("detective", JSON.stringify(response.data));
  } catch (error) {
    console.error("Error fetching detective data:", error);
  }
};

async function purchaseComponent(componentId, email) {
  try {
    const response = await axios({
      url: `${import.meta.env.VITE_API_PURCHASE}/${componentId}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
      },
      withCredentials: true,
    });

    if (response.status === 200) {
      toast.success(response.data.message);
    } else if (response.status === 201 || response.status === 203) {
      toast.warning(response.data.message);
    }
  } catch (error) {
    console.error("Error occurred:", error);
    toast.error("An error occurred during the purchase process");
  }
}


export { fetchDetectiveData, purchaseComponent };
