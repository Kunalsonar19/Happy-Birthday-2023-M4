import "./Wishes.css";

import { useNavigate, useParams } from "react-router-dom";

import { motion } from "framer-motion";
import { usePalette } from "@roylee1997/react-palette";

import Progress from "../../components/Progress/Progress";
import MusicCard from "../../components/MusicCard/MusicCard";
import TMessagesData from "../../typings/MessagesData";

// albumArts
import firstAlbumArt from "../../assets/sampleData/boy-girl.jpg";
import secondAlbumArt from "../../assets/sampleData/sing.jpg";

// musicFilePaths
import firstMusic from "../../assets/sampleData/music/Muskurane.mp3";
import secondMusic from "../../assets/sampleData/music/Mere Liye Tum Kaafi Ho.mp3";

// framer transition and variants
const commonTransition = {
  ease: [0.43, 0.13, 0.23, 0.96],
  duration: 0.5,
};

const messageContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
      duration: 0.5,
    },
  },
};

const messages = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

/* Each message must have music details (can be fetched through an API) with Album Art to be must) and message itself in multiple p tags (if possible) */
// Sample Data
const sampleMessagesDataArray: TMessagesData[] = [
  {
    albumArt: firstAlbumArt,
    musicName: "Muskurane Ki Wajah ❤️ :)",
    messageInParas: [
      "Hey Bachaa 🌟 ",

      "Sabse pehle toh play button dabao aur gana chaalu karo, fir niche message padhna!! Okk now Hope so tumhe mene banaye hue sabhi modules pasand aaye honge, I know mai jo bhi create karta hu vo tumhe achha hi lagta he. 🦄",

      "But still I want to say that I love you so much and I am so lucky to have you in my life. You are the most wonderful person in the world, I hope that this birthday is the best one yet, and I hope your day is full of surprises. I love you so much, and I can't wait to spend many more birthdays with you. 👻",

      "Already dinn bhar me tumne boht saari tareef sunn li hoogi apni lekin sach batau to tum ho vaisi haa kabhi kabhi track se utaar jaati ho lekin don't worry me hu naa tumhare saath, me tumhe hamesha track parr rakhunga aur khush bhi, I promise. 🍭 ",

      "Aaj din bhar se english me baat chaal rahi he abhi achha laag raha he normal tone me baat karke finally mene jaise socha tha vaise hi birthday wish kiya mere 3+ months ka hardwork finally safal hua, lekin ye to kuchh bhi nahi abhi to boht kuchh karna he tumhare liye. 🐇",

      "Areyy !! haa birthday gift toh bhool hi gaya dena tohh birthday gift chahiye side ke tab me dekh lena aur last me itna hi bolunga...",

      "Muskurane Ki Wajah Tum Hoo 🐧 :)",
    ],
    musicFilePath: firstMusic,
  },
  {
    albumArt: secondAlbumArt,
    musicName: 'Mere Liye Tum Kaafi Ho ❤️ :)',
    messageInParas: [
      "You know what? jabb bhi me tumhare saath hoota hu tohh muze ekdam alag saa feel hoota he jise me words me describe nahi kar sakta bass yu samaz loo ki sukun aur shanti milti he dil ko. 💌",

      "Me tumhare bina incomplete huu aur muze complete sirf tum karr sakti hoo, haa kabhi kabhi hum dono ke bich nokzok bhi hoo jaati he lekin kahi na kahi nokzok se bhi humara pyar aur strong hoo jata he. 🍧",

      "Jaha tum galat jaaogi toh me sambhalunga aur jaha me galat jaaunga toh tum sambhalogi, lekin ek dusre ka haat kabhi nahi chhodenge, chahe kuchh bhi ho jaaye aur mere hote hue tumhe kisi aur ki zaroorat nahi. 🐼",

      "Bass ab emotional maat hoona aasu tumhare aankho me achhe nahi lagte vo bhi mere hote hue, aur rahi baat gift ki jab milege tab de dunga ab ye bologi tum hi mere liye sab se bade gift ho toh aisa samazo ki ek bade gift ki taraf se ek chhota sa gift he bassss ab lenaa hi padega tumhe. 🐥",

      "Aaj boht saari baate hoo gaayi he and thank youu ki tumne ghar par hote hue bhi saare msg and modules dekhe aur padhe bhii, I know humhare beech thank you nahi bola jata tohh, I Love You Ao Much and once again Happy Birthday Mahh Roshgulla. 🐰",

      "Mere Liye Tum Kaafi Ho 🐧 :)",
    ],
    musicFilePath: secondMusic,
  },
];

const Wishes = () => {
  const navigate = useNavigate();
  const { id = 0 } = useParams();

  if (Number(id) < 0 || sampleMessagesDataArray[Number(id)] == undefined) {
    return <p>Invalid Wish Message Id</p>;
  }

  const {
    data: colorData,
    loading: colorDataIsLoading,
    error,
  } = usePalette(sampleMessagesDataArray[Number(id)].albumArt);

  if (error) {
    return <h1>Invalid Wish Message Id</h1>;
  }

  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      className="wishes-wrapper h-screen w-screen flex flex-col justify-between items-center"
    >
      <Progress
        primaryColor={colorData?.vibrant}
        secondaryColor={colorData?.darkVibrant}
        messageDataArrayLength={sampleMessagesDataArray.length}
      />
      <motion.div
        className="lg:w-11/12 rounded-t-2xl md:rounded-t-xl flex md:flex-row flex-col-reverse"
        style={{
          backgroundColor: colorDataIsLoading ? "#fff" : colorData?.vibrant,
        }}
        initial={{ y: "1000px" }}
        animate={{ y: "0px" }}
        exit={{ y: "1000px" }}
        transition={commonTransition}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={(_, info) => {
          if (info.offset.x > 50) {
            if (Number(id) > 0 && Number(id) < sampleMessagesDataArray.length) {
              navigate(`/wishes/${Number(id) - 1}`);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          } else if (info.offset.x < -50) {
            if (
              Number(id) >= 0 &&
              Number(id) < sampleMessagesDataArray.length - 1
            ) {
              navigate(`/wishes/${Number(id) + 1}`);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          } else {
            console.log(null);
          }
        }}
      >
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          animate="show"
          variants={messageContainer}
        >
          {sampleMessagesDataArray[Number(id)].messageInParas.map(
            (eachPara, index) => {
              return (
                <motion.p
                  className="p-8 message text-3xl"
                  variants={messages}
                  key={index + 2045}
                >
                  {eachPara}
                </motion.p>
              );
            }
          )}
        </motion.div>
        <div className="md:w-1/2 h-1/2 md:h-auto flex justify-center items-center">
          <MusicCard
            albumArt={sampleMessagesDataArray[Number(id)].albumArt}
            primaryColor={colorData?.vibrant}
            musicName={sampleMessagesDataArray[Number(id)].musicName}
            musicFilePath={sampleMessagesDataArray[Number(id)].musicFilePath}
          />
        </div>
      </motion.div>
    </motion.main>
  );
};

export default Wishes;
