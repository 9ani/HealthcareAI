import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SignInPage = () => {
    const { isSignedIn } = useUser();
    const router = useRouter();
    const { from } = router.query;

    useEffect(() => {
        if (isSignedIn) {
            if (from === 'fitness') {
                router.push("/personal-trainer");
            } else if (from === 'nutrition') {
                router.push("/user-dashboard");
            }
        }
    }, [isSignedIn, router, from]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#28511D]">
            <SignIn
                path="/sign-in"
                routing="path"
                appearance={{
                    elements: {
                        formButtonPrimary: "bg-[#CEE422] hover:bg-[#28511D] text-[#28511D] hover:text-[#CEE422]",
                        card: "bg-white",
                    },
                }}
            />
        </div>
    );
};

export default SignInPage;
