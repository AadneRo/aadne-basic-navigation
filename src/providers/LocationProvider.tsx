import React, { createContext, useState } from "react";
import { Coordinate, DirectionsEndpoint, Step } from "./../types";
import axios from "axios";
import { getDirectionMatrixEndpoint } from "./../services";

export const LocationContext = createContext<{
  setStart: (coordinate: Coordinate) => null;
  setEnd: (coordinate: Coordinate) => null;
  fetchDirections: () => null;
  coorddinatesPath: number[][];
  directionDescriptionList: Step[];
}>({
  setStart: () => null,
  setEnd: () => null,
  fetchDirections: () => null,
  coorddinatesPath: [],
  directionDescriptionList: []
});

function LocationProvider({ children }: { children: React.ReactNode }) {
  const [start, setStart] = useState<Coordinate>();
  const [end, setEnd] = useState<Coordinate>();
  const [responseData, setResponseData] = useState<DirectionsEndpoint>();

  const fetchDirections = () => {
    if (start === undefined || end === undefined) {
      return;
    }

    const endpoint = getDirectionMatrixEndpoint(start, end);

    axios
      .get(endpoint)
      .then((res) => {
        const data = res.data;
        setResponseData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const contextValues = {
    setStart,
    setEnd,
    fetchDirections,
    coorddinatesPath: responseData?.features[0]?.geometry.coordinates || [],
    directionDescriptionList:
      responseData?.features[0]?.properties.segments[0].steps || []
  };

  return (
    <LocationContext.Provider value={contextValues}>
      {children}
    </LocationContext.Provider>
  );
}

export default LocationProvider;

/** 
 * IN CASE OF LOST API KEY USE THIS 
 * 
const MOCK_DATA: DirectionsEndpoint = {
  type: "FeatureCollection",
  features: [
    {
      bbox: [10.722612, 59.915292, 10.742109, 59.923561],
      type: "Feature",
      properties: {
        segments: [
          {
            distance: 2419.3,
            duration: 306.9,
            steps: [
              {
                distance: 336.7,
                duration: 41.8,
                type: 11,
                instruction: "Head west on Henrik Ibsens gate",
                name: "Henrik Ibsens gate",
                way_points: [0, 10]
              },
              {
                distance: 637.6,
                duration: 65.3,
                type: 7,
                instruction:
                  "Enter the roundabout and take the 1st exit onto Parkveien",
                name: "Parkveien",
                exit_number: 1,
                way_points: [10, 31]
              },
              {
                distance: 80.0,
                duration: 16.9,
                type: 7,
                instruction:
                  "Enter the roundabout and take the 2nd exit onto Parkveien, 168",
                name: "Parkveien, 168",
                exit_number: 2,
                way_points: [31, 46]
              },
              {
                distance: 229.8,
                duration: 25.3,
                type: 1,
                instruction: "Turn right onto Parkveien",
                name: "Parkveien",
                way_points: [46, 54]
              },
              {
                distance: 42.9,
                duration: 7.7,
                type: 6,
                instruction: "Continue straight onto Parkveien",
                name: "Parkveien",
                way_points: [54, 57]
              },
              {
                distance: 54.8,
                duration: 12.6,
                type: 0,
                instruction: "Turn left onto Pilestredet",
                name: "Pilestredet",
                way_points: [57, 62]
              },
              {
                distance: 251.2,
                duration: 27.6,
                type: 1,
                instruction: "Turn right onto Dalsbergstien",
                name: "Dalsbergstien",
                way_points: [62, 71]
              },
              {
                distance: 256.3,
                duration: 28.1,
                type: 1,
                instruction: "Turn right onto Dalsbergstien",
                name: "Dalsbergstien",
                way_points: [71, 82]
              },
              {
                distance: 303.0,
                duration: 27.3,
                type: 3,
                instruction: "Turn sharp right onto Ullevålsveien",
                name: "Ullevålsveien",
                way_points: [82, 95]
              },
              {
                distance: 168.7,
                duration: 40.5,
                type: 1,
                instruction: "Turn right onto Frimanns gate",
                name: "Frimanns gate",
                way_points: [95, 101]
              },
              {
                distance: 58.2,
                duration: 14.0,
                type: 1,
                instruction: "Turn right onto Pilestredet park",
                name: "Pilestredet park",
                way_points: [101, 105]
              },
              {
                distance: 0.0,
                duration: 0.0,
                type: 10,
                instruction: "Arrive at Pilestredet park, on the right",
                name: "-",
                way_points: [105, 105]
              }
            ]
          }
        ],
        summary: { distance: 2419.3, duration: 306.9 },
        way_points: [0, 105]
      },
      geometry: {
        coordinates: [
          [10.728753, 59.915292],
          [10.726766, 59.915353],
          [10.726656, 59.915361],
          [10.72616, 59.915378],
          [10.725974, 59.915374],
          [10.724799, 59.915409],
          [10.724374, 59.915413],
          [10.724249, 59.915408],
          [10.724049, 59.915399],
          [10.722894, 59.915354],
          [10.722728, 59.915352],
          [10.722701, 59.91536],
          [10.72267, 59.915368],
          [10.722658, 59.915397],
          [10.722645, 59.915537],
          [10.722612, 59.915601],
          [10.722859, 59.916682],
          [10.722917, 59.916912],
          [10.722946, 59.916974],
          [10.72306, 59.917075],
          [10.724453, 59.918012],
          [10.724897, 59.918304],
          [10.725222, 59.918518],
          [10.725671, 59.918813],
          [10.725832, 59.918918],
          [10.725956, 59.919002],
          [10.72626, 59.919207],
          [10.727172, 59.919822],
          [10.727608, 59.920099],
          [10.727694, 59.920128],
          [10.727841, 59.920166],
          [10.727923, 59.92018],
          [10.727944, 59.920177],
          [10.727967, 59.920175],
          [10.72799, 59.920175],
          [10.728032, 59.920181],
          [10.728111, 59.920229],
          [10.728113, 59.920251],
          [10.728108, 59.920264],
          [10.728097, 59.920276],
          [10.728082, 59.920287],
          [10.728093, 59.920305],
          [10.728481, 59.920575],
          [10.72851, 59.920651],
          [10.728531, 59.920674],
          [10.728537, 59.920741],
          [10.728535, 59.920757],
          [10.728585, 59.920761],
          [10.728652, 59.920776],
          [10.728926, 59.920903],
          [10.729545, 59.921237],
          [10.729641, 59.921286],
          [10.729813, 59.921373],
          [10.730214, 59.921567],
          [10.731476, 59.922194],
          [10.731507, 59.922209],
          [10.7318, 59.922352],
          [10.732033, 59.92246],
          [10.73203, 59.922507],
          [10.732019, 59.922596],
          [10.732003, 59.922717],
          [10.731956, 59.922907],
          [10.731936, 59.92295],
          [10.731961, 59.922951],
          [10.732102, 59.922958],
          [10.732626, 59.922985],
          [10.733437, 59.923021],
          [10.735326, 59.9231],
          [10.735441, 59.923104],
          [10.736162, 59.923134],
          [10.736359, 59.923148],
          [10.736416, 59.923165],
          [10.736554, 59.923117],
          [10.737246, 59.922877],
          [10.737395, 59.922826],
          [10.737786, 59.922691],
          [10.737926, 59.922659],
          [10.738087, 59.922668],
          [10.738249, 59.922715],
          [10.738695, 59.922933],
          [10.738966, 59.923064],
          [10.739878, 59.923503],
          [10.739992, 59.923561],
          [10.740018, 59.923517],
          [10.740316, 59.923196],
          [10.740356, 59.923162],
          [10.740409, 59.923124],
          [10.740816, 59.922707],
          [10.741022, 59.922439],
          [10.741092, 59.922343],
          [10.741172, 59.922235],
          [10.741334, 59.922069],
          [10.741365, 59.922039],
          [10.741971, 59.921229],
          [10.742061, 59.921118],
          [10.742109, 59.921056],
          [10.742063, 59.921046],
          [10.741968, 59.921009],
          [10.740936, 59.920566],
          [10.739927, 59.920132],
          [10.739916, 59.920127],
          [10.739797, 59.920079],
          [10.739718, 59.920131],
          [10.73959, 59.920152],
          [10.738924, 59.920107],
          [10.738832, 59.920079]
        ],
        type: "LineString"
      }
    }
  ],
  bbox: [10.722612, 59.915292, 10.742109, 59.923561],
  metadata: {
    attribution: "openrouteservice.org | OpenStreetMap contributors",
    service: "routing",
    timestamp: 1674944859803,
    query: {
      coordinates: [
        [10.728928509526087, 59.91672854792813],
        [10.738449096679688, 59.920195662518516]
      ],
      profile: "driving-car",
      format: "json"
    },
    engine: {
      version: "6.8.0",
      build_date: "2022-10-21T14:34:31Z",
      graph_date: "2023-01-22T14:45:04Z"
    }
  }
};

*/
