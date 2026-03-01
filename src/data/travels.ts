export interface TravelPin {
  id: string;
  city: string;
  country: string;
  x: number; // percentage from left
  y: number; // percentage from top
  story?: string;
}

export const travels: TravelPin[] = [
  {
    id: "toronto",
    city: "Toronto",
    country: "Canada",
    x: 27,
    y: 30.5,
    story: "Home base 🇨🇦",
  },
  {
    id: "vancouver",
    city: "Vancouver",
    country: "Canada",
    x: 16,
    y: 29,
    story: "lowkey the better part of Canada",
  },
  {
    id: "florida",
    city: "Florida",
    country: "USA",
    x: 23.5,
    y: 42,
    story: "Universal Studios 🌎🎢",
  },
  {
    id: "japan",
    city: "Tokyo",
    country: "Japan",
    x: 85.5,
    y: 37,
    story: "animeland",
  },
  {
    id: "south-korea",
    city: "Seoul",
    country: "South Korea",
    x: 82.5,
    y: 37,
    story: "Favuorite food",
  },
  {
    id: "china",
    city: "Beijing",
    country: "China",
    x: 78.5,
    y: 33.5,
    story: "The motherland",
  },
];

