import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@clerk/nextjs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgramDayPlanCard from "../../components/ProgramDayPlanCard";
import SportProgress from "../../components/SportProgress";
import SportDetails from "../../components/SportDetails";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";

const Accordion = styled(MuiAccordion)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const SportsProgramsPage = () => {
  const { isSignedIn, user } = useUser();
  const router = useRouter();
  const [sportPlan, setSportPlan] = useState([]);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/");
    }
  }, [isSignedIn, router]);

  useEffect(() => {
    // Replace this block with actual data fetching logic
    const fetchData = async () => {
      // Simulate fetching sports plan
      const sportPlanData = await fetchSportPlan();
      setSportPlan(sportPlanData.weekPlan);
    };

    fetchData();
  }, []);

  const fetchSportPlan = async () => {
    // Placeholder function to simulate fetching the SportPlan
    return {
      weekPlan: [
        {
          day: "День 1",
          progress: "0%",
          program: {
            barbellPress: {
              name: "Жим штанги",
              completed: 0,
              total: 32,
            },
            dumbbellPress: {
              name: "Жим гантелей",
              completed: 0,
              total: 36,
            },
            lunges: {
              name: "Выпады",
              completed: 0,
              total: 39,
            },
          },
          recommendations: [
            {
              name: "Жим штанги",
              youtubeLink:
                "https://www.youtube.com/watch?v=barbell_press_example",
            },
            {
              name: "Жим гантелей",
              youtubeLink:
                "https://www.youtube.com/watch?v=dumbbell_press_example",
            },
            {
              name: "Выпады",
              youtubeLink: "https://www.youtube.com/watch?v=lunges_example",
            },
          ],
          motto: "Сила приходит через усилие — каждый шаг приближает к цели.",
        },
        {
          day: "День 2",
          progress: "0%",
          program: {
            squats: {
              name: "Приседания",
              completed: 0,
              total: 32,
            },
            legPress: {
              name: "Жим ногами",
              completed: 0,
              total: 36,
            },
            deadlifts: {
              name: "Тяга",
              completed: 0,
              total: 36,
            },
          },
          recommendations: [
            {
              name: "Приседания",
              youtubeLink: "https://www.youtube.com/watch?v=squats_example",
            },
            {
              name: "Жим ногами",
              youtubeLink: "https://www.youtube.com/watch?v=legpress_example",
            },
            {
              name: "Тяга",
              youtubeLink: "https://www.youtube.com/watch?v=deadlift_example",
            },
          ],
          motto: "Каждое усилие приближает к успеху.",
        },
        {
          day: "День 3",
          progress: "0%",
          program: {
            plank: {
              name: "Планка",
              completed: 0,
              total: 4,
            },
            russianTwists: {
              name: "Русские скручивания",
              completed: 0,
              total: 45,
            },
            legRaises: {
              name: "Подъемы ног",
              completed: 0,
              total: 36,
            },
          },
          recommendations: [
            {
              name: "Планка",
              youtubeLink: "https://www.youtube.com/watch?v=plank_example",
            },
            {
              name: "Русские скручивания",
              youtubeLink:
                "https://www.youtube.com/watch?v=russian_twists_example",
            },
            {
              name: "Подъемы ног",
              youtubeLink: "https://www.youtube.com/watch?v=leg_raises_example",
            },
          ],
          motto: "Стабильность — это основа силы.",
        },
        {
          day: "День 4",
          progress: "0%",
          program: {
            pullUps: {
              name: "Подтягивания",
              completed: 0,
              total: 32,
            },
            barbellRows: {
              name: "Тяга штанги",
              completed: 0,
              total: 36,
            },
            bicepCurls: {
              name: "Сгибания на бицепс",
              completed: 0,
              total: 36,
            },
          },
          recommendations: [
            {
              name: "Подтягивания",
              youtubeLink: "https://www.youtube.com/watch?v=pullups_example",
            },
            {
              name: "Тяга штанги",
              youtubeLink:
                "https://www.youtube.com/watch?v=barbell_rows_example",
            },
            {
              name: "Сгибания на бицепс",
              youtubeLink:
                "https://www.youtube.com/watch?v=bicep_curls_example",
            },
          ],
          motto: "Каждый подъем приближает к вершине.",
        },
        {
          day: "День 5",
          progress: "0%",
          program: {
            legExtensions: {
              name: "Разгибания ног",
              completed: 0,
              total: 36,
            },
            calfRaises: {
              name: "Подъемы на икры",
              completed: 0,
              total: 39,
            },
            gluteBridges: {
              name: "Ягодичный мостик",
              completed: 0,
              total: 39,
            },
          },
          recommendations: [
            {
              name: "Разгибания ног",
              youtubeLink:
                "https://www.youtube.com/watch?v=leg_extensions_example",
            },
            {
              name: "Подъемы на икры",
              youtubeLink:
                "https://www.youtube.com/watch?v=calf_raises_example",
            },
            {
              name: "Ягодичный мостик",
              youtubeLink:
                "https://www.youtube.com/watch?v=glute_bridge_example",
            },
          ],
          motto: "Сильные ноги — основа движения.",
        },
        {
          day: "День 6",
          progress: "0%",
          program: {
            sitUps: {
              name: "Скручивания",
              completed: 0,
              total: 45,
            },
            bicycleCrunches: {
              name: "Велосипед",
              completed: 0,
              total: 45,
            },
            mountainClimbers: {
              name: "Горные альпинисты",
              completed: 0,
              total: 45,
            },
          },
          recommendations: [
            {
              name: "Скручивания",
              youtubeLink: "https://www.youtube.com/watch?v=situps_example",
            },
            {
              name: "Велосипед",
              youtubeLink:
                "https://www.youtube.com/watch?v=bicycle_crunches_example",
            },
            {
              name: "Горные альпинисты",
              youtubeLink:
                "https://www.youtube.com/watch?v=mountain_climbers_example",
            },
          ],
          motto: "Каждое движение делает тебя сильнее.",
        },
        {
          day: "День 7",
          progress: "0%",
          program: {
            burpees: {
              name: "Бёрпи",
              completed: 0,
              total: 45,
            },
            kettlebellSwings: {
              name: "Махи гирей",
              completed: 0,
              total: 36,
            },
            jumpSquats: {
              name: "Прыжки в приседе",
              completed: 0,
              total: 36,
            },
          },
          recommendations: [
            {
              name: "Бёрпи",
              youtubeLink: "https://www.youtube.com/watch?v=burpees_example",
            },
            {
              name: "Махи гирей",
              youtubeLink:
                "https://www.youtube.com/watch?v=kettlebell_swings_example",
            },
            {
              name: "Прыжки в приседе",
              youtubeLink:
                "https://www.youtube.com/watch?v=jump_squats_example",
            },
          ],
          motto: "Сила в движении, стремись к лучшему.",
        },
      ],
    };
  };

  const sliderRef = useRef(null);
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#28511D" }}
        onClick={onClick}
      />
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#28511D" }}
        onClick={onClick}
      />
    );
  };
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    focusOnSelect: true,
    initialSlide: currentDayIndex,
    afterChange: (index) => setCurrentDayIndex(index),
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="bg-white pt-12 pb-12 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 px-4 md:px-12 mt-8 md:mt-24 flex-grow">
        <div className="w-full md:w-1/2">
          {sportPlan.length > 0 && (
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <SportProgress
                  progress={sportPlan[currentDayIndex].progress}
                  date={sportPlan[currentDayIndex].day}
                />
              </div>
              <SportDetails program={sportPlan[currentDayIndex].program} />
            </div>
          )}
          {sportPlan.length > 0 && (
            <div>
              <h2 className={`text-4xl font-bold text-custom-green  mb-4`}>
                Рекомендации:
              </h2>
              {sportPlan[currentDayIndex].recommendations.map(
                (recommendation, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleAccordionChange(`panel${index + 1}`)}
                  >
                    <AccordionSummary
                      aria-controls={`panel${index + 1}d-content`}
                      id={`panel${index + 1}d-header`}
                    >
                      <Typography>{recommendation.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Рекомендация:{" "}
                        <a
                          href={recommendation.youtubeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {recommendation.name}
                        </a>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                )
              )}
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative w-full px-4 md:px-10">
            <Slider
              ref={sliderRef}
              {...sliderSettings}
              className="custom-slider"
            >
              {sportPlan.map((dayPlan, index) => (
                <div key={`day-${index}`} className="px-2 slide-item">
                  <ProgramDayPlanCard dayPlan={dayPlan} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
      <Chatbot userId={user ? user.id : null} />
    </div>
  );
};

export default SportsProgramsPage;
