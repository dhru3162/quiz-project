import { useEffect, useState } from "react";
import HistoryPage from "./HistoryPage";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useCookies } from "react-cookie";
import { GetHistoryApi } from "@/src/ReduxToolkit/Apis/users.api";
import SeoComponent from "../SeoComponent/SeoComponent";
import { SEO_DATA } from "../SeoComponent/SeoData";

const HistoryContainer = () => {
  const router = useRouter();
  const [history, setHistory]: any = useState();
  const [loader, setLoader] = useState(true);
  const { role } = useSelector((state: any) => state.auth);
  const [{ auth }, setCookie] = useCookies(["auth"]);

  useEffect(() => {
    if (role && role === "admin") {
      router.push("dashboard");
    }
    // eslint-disable-next-line
  }, [role]);

  useEffect(() => {
    getUserHistory();
    // eslint-disable-next-line
  }, []);

  const getUserHistory = async () => {
    try {
      const payload = {
        Authorization: `Bearer ${auth?.token}`,
      };
      const res = await GetHistoryApi(payload);
      setHistory(res.data.data);
    } catch (error: any) {
      setHistory([]);
      toast.error(`Something Went Wrong`);
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <SeoComponent {...SEO_DATA.history} />
      <HistoryPage
        {...{
          history,
          router,
          loader,
        }}
      />
    </>
  );
};

export default HistoryContainer;
