import type { Location } from "@/types/location";

export const locations: Location[] = [
  {
    slug: "moos",
    name: "Sportanlage Moos",
    address: {
      street: "Moosstrasse",
      plz: "8907",
      city: "Wettswil",
    },
    phone: "+41 44 701 16 90",
    fields: [
      {
        slug: "moos-1",
        name: "Platz 1",
        surface: "Kunstrasen",
        floodlight: true,
      },
      {
        slug: "moos-2",
        name: "Platz 2",
        surface: "Kunstrasen",
        floodlight: true,
      },
      {
        slug: "moos-3",
        name: "Platz 3",
        surface: "Naturrasen",
        floodlight: true,
      },
    ],
  },
  {
    slug: "jonentaeli",
    name: "Sportanlage Jonentäli",
    address: {
      street: "Peter Götschi-Weg 1",
      plz: "8915",
      city: "Hausen am Albis",
    },
    fields: [
      {
        slug: "jonentaeli-1",
        name: "Platz 1",
        surface: "Naturrasen",
        floodlight: true,
      },
      {
        slug: "jonentaeli-2",
        name: "Platz 2",
        surface: "Naturrasen",
        floodlight: false,
      },
    ],
  },
  {
    slug: "knonau",
    name: "Sportplatz Knonau",
    address: {
      street: "Herrenweg",
      plz: "8934",
      city: "Knonau",
    },
    fields: [
      {
        slug: "knonau-1",
        name: "Platz 1",
        surface: "Naturrasen",
        floodlight: true,
      },
    ],
  },
  {
    slug: "wygarten",
    name: "Schulsportanlage Wygarten",
    address: {
      street: "Schulhausstrasse 4",
      plz: "8932",
      city: "Mettmenstetten",
    },
    fields: [
      // Beleuchtung baulich vorhanden, aber defekt — daher floodlight: false
      {
        slug: "wygarten-1",
        name: "Platz 1",
        surface: "Naturrasen",
        floodlight: false,
      },
    ],
  },
  {
    slug: "suerenloh",
    name: "Sportanlage Sürenloh",
    address: {
      street: "Langackerstrasse",
      plz: "8142",
      city: "Uitikon Waldegg",
    },
    fields: [
      {
        slug: "suerenloh-1",
        name: "Platz 1",
        surface: "Naturrasen",
        floodlight: true,
      },
      {
        slug: "suerenloh-2",
        name: "Platz 2",
        surface: "Kunstrasen",
        floodlight: true,
      },
    ],
  },
  {
    slug: "schlag",
    name: "Sportanlage Schlag",
    address: {
      street: "Arnistrasse",
      plz: "8908",
      city: "Hedingen",
    },
    fields: [
      {
        slug: "schlag-1",
        name: "Platz 1",
        surface: "Naturrasen",
        floodlight: true,
      },
    ],
  },
];
