import React from "react";

const test = () => {
  const user = {
    accessToken: "",
    displayName: "",
    email: "",
    emailVerified: "",
    phoneNumber: "",
    photoURL: "",
    providerData: "",
    uid: "",
    stsTokenManager: {
      accessToken: "",
      expirationTime: 1710588060432,
      refreshToken:
        "AMf-vBzzr1PAzlfR73adO_xPVpC2nNhA5jfUASriuvU3DcPplf35MdRW1T3MZiba399uCRDQ",
    },
    metadata: {
      createdAt: "1710574255636",
      creationTime: "Sat, 16 Mar 2024 07:30:55 GMT",
      lastLoginAt: "1710584460199",
      lastSignInTime: "Sat, 16 Mar 2024 10:21:00 GMT",
    },
  };
  

//   for add google and git login

//   const signInWithGoogle = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       await authentication.signInWithRedirect(provider);
//     } catch (error) {
//       console.error("Error signing in with Google:", error);
//     }
//   };

//   const signInWithGithub = async () => {
//     const provider = new GithubAuthProvider();
//     try {
//       const res: any = await authentication.signInWithRedirect(provider);
//     } catch (error: any) {
//       if (error.code === "auth/account-exists-with-different-credential") {
//         toast.error(
//           "Please sign in using the original provider associated with your email address."
//         );
//       } else {
//         toast.error("Error signing in with GitHub:", error);
//       }
//     }
//   };

//   const getGoogleLoginData = async () => {
//     try {
//       const authUser: any = await authentication.getRedirectResult();
//       if (authUser.user) {
//         dispatch(loginSuccess(authUser?.user));
//         toast.success("Login Successful");
//         const payload: any = {
//           accessToken: authUser?.user?._delegate?.accessToken,
//           email: authUser?.user?.email,
//           displayName: authUser?.user?.displayName,
//           uid: authUser?.user?.uid,
//         };
//         // const expires = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
//         setCookie("auth", payload);
//         router.push(`/dashboard`);
//       }
//     } catch (error: any) {
//       console.error("Error signing in with Google:", error);
//     } finally {
//     }
//   };

//   useEffect(() => {
//     getGoogleLoginData();
//   }, [router]);

  return <div></div>;
};

export default test;
