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
import SportHeader from "../../components/SportHeader";

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
              "name": "Жим штанги", 
              "youtubeLink": "https://www.youtube.com/watch?v=Jb2bMaxqnXI&ab_channel=IlyaGeneralov" 
            }, 
            { 
              "name": "Жим гантелей", 
              "youtubeLink": "https://www.youtube.com/watch?v=CjHIKDQ4RQo&ab_channel=PureGym" 
            }, 
            { 
              "name": "Выпады", 
              "youtubeLink": "https://www.youtube.com/watch?v=xqvCmoLULNY&ab_channel=XHITDaily" 
            } 
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
          recommendations:  [ 
            { 
              "name": "Приседания", 
              "youtubeLink": "https://www.youtube.com/watch?v=gml-R27ufas&ab_channel=hiitworks" 
            }, 
            { 
              "name": "Жим ногами", 
              "youtubeLink": "https://www.youtube.com/watch?v=vWc9aKZHETo&ab_channel=IlyaGeneralov" 
            }, 
            { 
              "name": "Тяга", 
              "youtubeLink": "https://www.youtube.com/watch?v=D3E6BEuROfM&ab_channel=IlyaGeneralov" 
            } 
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
              "name": "Планка", 
              "youtubeLink": "https://www.youtube.com/watch?v=0JtBS11DGDk&ab_channel=%D0%AE%D1%80%D0%B8%D0%B9%D0%A5%D0%B0%D1%80%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2" 
            }, 
            { 
              "name": "Русские скручивания", 
              "youtubeLink": "https://www.youtube.com/watch?v=Ewi4dQEMTR8&ab_channel=MistySanders" 
            }, 
            { 
              "name": "Подъемы ног", 
              "youtubeLink": "https://www.youtube.com/watch?v=ch-iFMEV2XE&ab_channel=%D0%A4%D0%B8%D1%82%D0%BD%D0%B5%D1%81MORGAN" 
            } 
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
              "name": "Подтягивания", 
              "youtubeLink": "https://www.youtube.com/watch?v=EkpJkHpJXmM&ab_channel=BulldogGear" 
            }, 
            { 
              "name": "Тяга штанги", 
              "youtubeLink": "https://www.youtube.com/watch?v=D3E6BEuROfM&ab_channel=IlyaGeneralov" 
            }, 
            { 
              "name": "Сгибания на бицепс", 
              "youtubeLink": "https://www.youtube.com/watch?v=H_JMAU1NKB8&ab_channel=%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%9F%D0%BE%D0%BF%D0%B5%D0%BD%D0%BA%D0%BE" 
            } 
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
              "name": "Разгибания ног", 
              "youtubeLink": "https://www.youtube.com/watch?v=1mgV0E5jIbs&ab_channel=GeographyFitness" 
            }, 
            { 
              "name": "Подъемы на икры", 
              "youtubeLink": "https://www.youtube.com/watch?v=-5mLbj55tq0&ab_channel=%D0%9A%D1%83%D0%B7%D0%BD%D0%B8%D1%86%D0%B0%D0%A1%D0%BF%D0%BE%D1%80%D1%82%D0%B0" 
            }, 
            { 
              "name": "Ягодичный мостик", 
              "youtubeLink": "https://www.youtube.com/watch?v=c-Zi3jSpZj4&ab_channel=IlyaGeneralov" 
            } 
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
              "name": "Скручивания", 
              "youtubeLink": "https://www.youtube.com/watch?v=guydPuiirkU&ab_channel=%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%9C%D1%96%D0%BB%D1%8E%D0%BA%D0%BE%D0%B2" 
            }, 
            { 
              "name": "Велосипед", 
              "youtubeLink": "https://www.youtube.com/watch?v=jUAKMd42jqs&ab_channel=MakeFitness" 
            }, 
            { 
              "name": "Горные альпинисты", 
              "youtubeLink": "https://www.youtube.com/watch?v=RfdqSn4Mono&ab_channel=Forma24" 
            } 
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
              "name": "Бёрпи", 
              "youtubeLink": "https://www.youtube.com/watch?v=50-0F_gQHFI&ab_channel=%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B9%D0%91%D1%83%D0%BA%D1%80%D0%B5%D0%B9%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D1%82%D0%BD%D0%B5%D1%81%D0%B8%D0%B7%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%8C%D0%B5" 
            }, 
            { 
              "name": "Махи гирей", 
              "youtubeLink": "https://www.youtube.com/watch?v=hfzBArkbshg&ab_channel=%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%9F%D0%BE%D0%BF%D0%B5%D0%BD%D0%BA%D0%BE" 
            }, 
            { 
              "name": "Прыжки в приседе", 
              "youtubeLink": "https://www.youtube.com/watch?v=afJ9rpt-MpQ&ab_channel=%D0%A0%D0%91%D0%9A%D0%97%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%8C%D0%B5" 
            } 
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
      <SportHeader />
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
    <h2 className={`text-4xl font-bold text-custom-green mb-4 mt-4`}>
      Видеоуроки по программе на {sportPlan[currentDayIndex].day}:
    </h2>
    {sportPlan[currentDayIndex].recommendations.map(
      (recommendation, index) => {
        // Extract the video ID from the YouTube link
        const videoId = recommendation.youtubeLink.split('v=')[1]?.split('&')[0];

        return (
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
                {videoId ? (
                  // Embed YouTube video using iframe
                  <iframe
                    width="100%"
                    height="400px"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={recommendation.name}
                  />
                ) : (
                  <span>Видео недоступно</span>
                )}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      }
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
