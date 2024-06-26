import Navbar from "../Navbar/Navbar";
import Styles from "./Profile.module.scss";
import { Avatar, Pane, Position, Tooltip } from "evergreen-ui";
import { TiArrowBack } from "react-icons/ti";
import { TbReload } from "react-icons/tb";

const ProfilePage = (props: any) => {
  const {
    loggedInData,
    router,
    role,
    isLoading,
    totalScore,
    getScore
  } = props;

  return (
    <>
      <div className="bgColor min-h-[100dvh]">
        <Navbar />
        <div className="flex justify-center items-center w-full h-full mt-28">
          <div
            className={`${Styles.container} rounded-lg w-full md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] h-fit pt-8 pb-8 duration-500`}
          >
            <div
              className={`${Styles.btnColor} ml-12 max-md:ml-10 max-w-fit text-lg max-md:text-sm cursor-pointer`}
              onClick={() => router.push("/dashboard")}
            >
              <Pane display="flex" alignItems="center">
                <TiArrowBack className="mr-2" />
                <span className="mt-1">Back</span>
              </Pane>
            </div>

            <div className={`w-full p-12 pb-0 max-md:p-10 relative`}>
              <div className="absolute -top-28 left-0 w-full">
                <div className="flex justify-center">
                  <Avatar
                    name={loggedInData?.user?.fullName}
                    size={90}
                    src={loggedInData?.photoURL}
                    className={`cursor-default`}
                  />
                </div>
              </div>

              <div className="2xl:text-3xl lg:text-2xl space-y-10 max-md:text-xl md:text-2xl max-md:space-y-8 duration-500">
                <div>
                  Full Name:{" "}
                  <span className={`${Styles.textColor}`}>
                    {loggedInData?.user?.fullName}
                  </span>
                </div>

                <div>
                  Email I&apos;d:{" "}
                  <span className={`${Styles.textColor}`}>
                    {loggedInData?.user?.email}
                  </span>
                </div>

                {role !== "admin" && (
                  <div>
                    Your Score:{" "}
                    <span>
                      {isLoading ? (
                        <span className={`${Styles.textColor}`}>
                          Loading...
                        </span>
                      ) : (
                        <span className={`inline-flex items-center`}>
                          <span className={`${Styles.textColor}`}>
                            {totalScore}
                          </span>

                          <Tooltip
                            content="Reload Score"
                            position={Position.RIGHT}
                          >
                            <span
                              className={`${Styles.btnColor} pb-1 ml-2 cursor-pointer`}
                              onClick={getScore}
                            >
                              <TbReload />
                            </span>
                          </Tooltip>
                        </span>
                      )}
                    </span>
                  </div>
                )}

                {role === "admin" && (
                  <div>
                    Role: <span className={`${Styles.textColor}`}>Admin</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
