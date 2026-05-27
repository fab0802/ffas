type IcalServer = "fvrz" | "el-pl";

const SERVER_HOSTS: Record<IcalServer, string> = {
  fvrz: "matchcenter.fvrz.ch",
  "el-pl": "matchcenter.el-pl.ch",
};

function buildIcalUrl(
  server: IcalServer,
  v: string,
  t: string,
  calName: string,
): string {
  const host = SERVER_HOSTS[server];
  const params = new URLSearchParams({
    v,
    t,
    sp: "de",
    calName,
    format: "ics",
  });
  return `https://${host}/portaldata/1/nisrd/WebService/verein/calendar.asmx/Team?${params.toString()}`;
}

export const footballChIcalUrls: Record<string, string> = {
  "frauen-1": buildIcalUrl(
    "fvrz",
    "576949",
    "57743",
    "FC Hausen a/A - Frauen 4. Liga 1",
  ),

  // D-Juniorinnen
  "juniorinnen-d9a": buildIcalUrl(
    "el-pl",
    "1519",
    "72516",
    "FFAS Juniorinnen D9a",
  ),
  "juniorinnen-d9b": buildIcalUrl(
    "fvrz",
    "576949",
    "62057",
    "FFAS Juniorinnen D9b",
  ),
  "juniorinnen-d7a": buildIcalUrl(
    "el-pl",
    "1519",
    "75347",
    "FFAS Juniorinnen D7a",
  ),
  "juniorinnen-d7b": buildIcalUrl(
    "fvrz",
    "576949",
    "72158",
    "FFAS Juniorinnen D7b",
  ),

  // E-Juniorinnen (Turniere)
  "juniorinnen-ea": buildIcalUrl(
    "el-pl",
    "1519",
    "71707",
    "FFAS Juniorinnen Ea",
  ),
  "juniorinnen-eb": buildIcalUrl(
    "fvrz",
    "955371",
    "75470",
    "FFAS Juniorinnen Eb",
  ),
};
