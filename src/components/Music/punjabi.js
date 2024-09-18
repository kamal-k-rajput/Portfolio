import { SINGER } from "./singers";

export const punjabi = [
  {
    id: 1,
    title: "Jab se tune mujhe deewana bana rakha h",
    link: "https://www.youtube.com/watch?v=YtDdHhsYjFI",
    singer: SINGER.ABIDA_PARVEEN,
  },
  {
    id: 2,
    title: "Boohey Barian",
    link: "https://www.youtube.com/watch?v=q2bIHdeMWp8",
    singer: SINGER.HADIQA_KIANI,
  },
  {
    id: 3,
    title: "Kothe Te Aa Mahiya",
    link: "https://www.youtube.com/watch?v=ERjFX8K_BmM",
    singer: `${SINGER.JAGJIT_SINGH}, ${SINGER.CHITRA_SINGH}`,
  },
];
