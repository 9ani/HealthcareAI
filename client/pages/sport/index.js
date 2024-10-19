import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import Header from "../components/Header";
import ModalComponent from "../components/Modal";
import Image from "next/image";
import Footer from "../components/Footer";
import { useEffect } from "react";
const IndexPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { isSignedIn, user } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (isSignedIn) {
      router.push("/user-dashboard");
    }
  }, [isSignedIn, router]);
  const handleButtonClick = () => setModalIsOpen(true);

  return (
    <div className="bg-custom-green pt-12 pb-12 min-h-screen flex flex-col">
      <Header
        weekPlanLength={0}
        handleShow={() => {}}
        handleShow1={() => {}}
        handleLogin={() => router.push("/sign-in")}
        foodHistory={[]}
        todaysNutrition={{}}
        setHasJustSignedOut={() => {}}
        setHasJustCreatedPlan={() => {}}
        setShowAuthModal={setShowAuthModal}
      />
      <div className="flex flex-col lg:flex-row items-center justify-between flex-grow">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full min-h-screen bg-custom-green">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <Image
              src="/images/landing2.png"
              alt="landing"
              width={800}
              height={900}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 px-8 lg:px-16 py-12 order-1 lg:order-2">
            <h2 className="text-5xl lg:text-7xl  text-[#CEE422] mb-20 font-rubick2">
              Составление рациона питания
            </h2>
            <h4 className="text-xl lg:text-2xl font-bold text-[#CEE422] mb-8">
              Введите свои диетические предпочтения, чтобы составить план
              питания.
            </h4>
            <div className="w-full ">
              <button
                onClick={handleButtonClick}
                className="w-full bg-[#CEE422] text-custom-green rounded-lg text-xl font-bold py-4 px-8 transition duration-300 ease-in-out hover:bg-[#DAF23D] hover:shadow-lg"
              >
                Создать план питания
              </button>
            </div>
            <ModalComponent
              isOpen={modalIsOpen}
              closeModal={() => setModalIsOpen(false)}
              setWeekPlan={() => {}}
              userID={user ? user.id : null}
              setShowAuthModal={setShowAuthModal}
              setHasJustCreatedPlan={() => {}}
            />
          </div>
        </div>
      </div>
      {
        <div className="bg-custom-green help py-12">
          <div className="bg-custom-green pb-24">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl lg:text-6xl  text-[#CEE422] mb-16 text-center font-rubick2">
                Как пользоваться системой
              </h1>

              <div className="mb-10">
                {[
                  {
                    title: "1. Заполнение данных пользователя",
                    description:
                      "Введите ваши личные данные, предпочтения в еде и цели для создания персонализированного плана питания.",
                    image: "/images/fill_form.gif",
                  },
                  {
                    title: "2. Рекомендации по блюдам и недельный рацион",
                    description:
                      "Получите персонализированные рекомендации по блюдам и полный недельный план питания на основе ваших данных.",
                    image: "/images/cards.gif",
                  },
                  {
                    title: "3. Добавление еды и отслеживание прогресса",
                    description:
                      "Записывайте съеденные блюда и следите за своим прогрессом в достижении целей питания.",
                    image: "/images/progress.gif",
                  },
                  {
                    title: "4. Добавление меню и рекомендации блюд из кафе",
                    description:
                      "Добавляйте блюда из меню кафе и получайте рекомендации, соответствующие вашему плану питания.",
                    image: "/images/map.gif",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col lg:flex-row items-center justify-between mt-10 lg:mt-20 gap-8 lg:gap-24"
                  >
                    <div
                      className={`w-full lg:w-1/2 ${
                        index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <h2 className="text-3xl lg:text-4xl font-bold text-[#CEE422] mb-4">
                        {step.title}
                      </h2>
                      <p className="text-xl text-white mb-4">
                        {step.description}
                      </p>
                    </div>
                    <div
                      className={`w-full lg:w-1/2 mt-8 lg:mt-0 ${
                        index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="flex justify-center">
                        <Image
                          src={step.image}
                          alt={`GIF: ${step.title}`}
                          width={400}
                          height={300}
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-24">
                <button
                  onClick={handleButtonClick}
                  className="bg-[#CEE422] text-custom-green text-2xl font-bold py-4 px-8 rounded-lg transition duration-300 ease-in-out hover:bg-[#DAF23D] hover:shadow-lg"
                >
                  Начать пользоваться
                </button>
              </div>
            </div>
          </div>
        </div>
      }
      <Footer hasWeekPlan={false} />
    </div>
  );
};

export default IndexPage;