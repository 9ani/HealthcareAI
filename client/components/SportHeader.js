import React from "react";
import { useRouter } from "next/router";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

const SportHeader = () => {
    const router = useRouter();
    const buttonStyle = "bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-200";
    const highlightedButtonStyle = "bg-[#CEE422] text-black px-4 py-2 rounded hover:bg-[#DAF23D] transition-colors duration-200";

    const handleSignIn = () => {
        router.push("/sign-in");
    };

    const handleSignUp = () => {
        router.push("/sign-up");
    };

    const handleHelpClick = () => {
        const helpSection = document.querySelector(".help");
        if (helpSection) {
            helpSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleSportClick = () => {
        router.push("/personal-trainer");
    };

    const handleNutritionClick = () => {
        router.push("/");
    };

    return (
        <header className="bg-gray-300 mx-4 md:mx-12 rounded-full h-auto md:h-20 relative flex items-center justify-between px-4 md:px-6 py-2">
            <div className="flex items-center gap-4">
                <Image
                    src="/images/logo1.png" 
                    alt="logo"
                    width={70}
                    height={64}
                />
                <span className="text-2xl font-bold">HealthCare AI</span>
            </div>

            <nav className="flex items-center gap-4">
                <SignedIn>
                    <button onClick={handleNutritionClick} className={highlightedButtonStyle}>
                        Питание
                    </button>
                    
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <a href="#" className="text-black no-underline hover:text-gray-600 transition-colors duration-200">
                        О нас
                    </a>
                    <a href="#" onClick={handleHelpClick} className="text-black no-underline hover:text-gray-600 transition-colors duration-200">
                        Помощь
                    </a>
                    <a href="#" className="text-black no-underline hover:text-gray-600 transition-colors duration-200">
                        Контакты
                    </a>
                    <button onClick={handleSignIn} className={buttonStyle}>
                        Вход
                    </button>
                    <button onClick={handleSignUp} className={buttonStyle}>
                        Регистрация
                    </button>
                    <button onClick={handleSportClick} className={buttonStyle}>
                        Фитнес
                    </button>
                </SignedOut>
            </nav>
        </header>
    );
};

export default SportHeader;
