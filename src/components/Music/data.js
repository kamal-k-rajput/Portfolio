import { awadhi } from "./Awadhi";
import { bhajan } from "./Bhajan";
import { bhojpuriSongs } from "./bhojpuri";
import { gazal } from "./gazal";
import { kabir } from "./kabir";
import { maithili } from "./maithili";
import { punjabi } from "./punjabi";
import { qawwali } from "./Qawwali";
import { uncategorised } from "./song";
import { sufi } from "./sufi";

export const songsdata = [
  { list: qawwali, title: "Qawwali" },
  { list: gazal, title: "Ghazals" },
  { list: sufi, title: "Sufi" },
  { list: uncategorised, title: "Un Categorised" },
  { list: bhojpuriSongs, title: "Bhojpuri songs" },
  { list: maithili, title: "Maithili songs" },
  { list: punjabi, title: "Punjabi songs" },
  { list: kabir, title: "Kabir" },
  { list: awadhi, title: "Awadhi" },
  { list: bhajan, title: "Bhajan" },
];
