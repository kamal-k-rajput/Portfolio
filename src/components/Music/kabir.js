import { SINGER } from "./singers";
import { TAGS } from "./tags";

export const kabir = [
  {
    id: 1,
    title: "Jogan Ban Jaungi Sayyan Tore Kaaran",
    link: "https://www.youtube.com/watch?v=v6VZXoXJ4w8",
    singer: `${SINGER.USTAD_FARID_AYAZ}, ${SINGER.ABU_MUHAMMAD}`,
  },
  {
    id: 2,
    title: "Shab e Hijr Voh Dam ba Dam Yaad Aaye by",
    link: "https://www.youtube.com/watch?v=aa8onCQryfQ",
    singer: `${SINGER.USTAD_FARID_AYAZ}, ${SINGER.ABU_MUHAMMAD}`,
  },
  {
    link: "https://www.youtube.com/watch?v=Ybayv7RvCXg",
    title: "Maula Maula Laakh Pukaare' & 'Bhala Hua Mori Gagri Phooti",
    id: 19,
    videoCode: "Ybayv7RvCXg",
    singer: `${SINGER.USTAD_FARID_AYAZ}, ${SINGER.ABU_MUHAMMAD}`,
    tags: [TAGS.KABIR, TAGS.SUFI],
  },
];
