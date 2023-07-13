"use client"
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import MUIDataTable from "mui-datatables";
import Image from "next/image";
import Link from "next/link";
import styles from "./trekkingtours.module.scss";

const columns = [
  {
    name: "Preview",
    options: {
      filterOptions: { fullWidth: true },
      filter: false,
      sort: false
    }
  },
  {
    name: "name",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "country",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "area",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "duration",
    options: {
      filter: false,
      sort: true,
    }
  },
  {
    name: "grade",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "activities",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "options",
    options: {
      filter: false,
      sort: false,
    }
  }
];

const data = [
  {
    preview: "https://images.pexels.com/photos/4360449/pexels-photo-4360449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Everest Base Camp Trek",
    Duration: "16 Days",
    Grade: "Strenuous",
    Activities: "Trekking",
    country: "Nepal",
    area: "Everest Region",
    options: [
      {
        name: "View Details",
        link: "#"
      },
      {
        name: "Itinerary",
        link: "#"
      },
      {
        name: "Price List",
        link: "#"
      },
      {
        name: "Dates",
        link: "#"
      },
    ]
  },
  {
    preview: "https://images.pexels.com/photos/4360449/pexels-photo-4360449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Kanchenjunga Base Camp Trek",
    Duration: "16 Days",
    Grade: "Strenuous",
    Activities: "Trekking",
    country: "Nepal",
    area: "Everest Region",
    options: [
      {
        name: "View Details",
        link: "#"
      },
      {
        name: "Itinerary",
        link: "#"
      },
      {
        name: "Price List",
        link: "#"
      },
      {
        name: "Dates",
        link: "#"
      },
    ]
  },
  {
    preview: "https://images.pexels.com/photos/4360449/pexels-photo-4360449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Everest Base Camp Trek",
    Duration: "16 Days",
    Grade: "Strenuous",
    Activities: "Trekking",
    country: "Nepal",
    area: "Everest Region",
    options: [
      {
        name: "View Details",
        link: "#"
      },
      {
        name: "Itinerary",
        link: "#"
      },
      {
        name: "Price List",
        link: "#"
      },
      {
        name: "Dates",
        link: "#"
      },
    ]
  },
  {
    preview: "https://images.pexels.com/photos/4360449/pexels-photo-4360449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Annapurna Base Camp Trek",
    Duration: "16 Days",
    Grade: "Strenuous",
    Activities: "Trekking",
    country: "Nepal",
    area: "Everest Region",
    options: [
      {
        name: "View Details",
        link: "#"
      },
      {
        name: "Itinerary",
        link: "#"
      },
      {
        name: "Price List",
        link: "#"
      },
      {
        name: "Dates",
        link: "#"
      },
    ]
  },
];

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});

const TrekkingTours = () => {

  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("100%");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(false);
  const [printBtn, setPrintBtn] = useState(false);
  const [viewColumnBtn, setViewColumnBtn] = useState(false);
  const [filterBtn, setFilterBtn] = useState(true);

  const options = {
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
    isRowSelectable: (dataIndex) => {
      return false;
    },
    selectableRowsHideCheckboxes: true
  };

  const renderOptions = (options) => {
    return (
      <div className={styles.options}>
        {
          options.map((option, index) => (
            <div key={index} className={styles.option}>
              <Link href={option.link}>
                {option.name}
              </Link>
            </div>
          ))
        }
      </div>
    );
  };

  const renderPreview = (preview) => {
    return (
      <Image
        src={preview}
        alt="Preview Image"
        width={100}
        height={100}
      />
    );
  };

  return (
    <section className={styles.trekkingtours}>
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={createTheme()}>
          <MUIDataTable
            title={
              <h4 className={styles.title}>
                Nepal Trekking List
              </h4>
            }
            data={data.map((item) => [
              renderPreview(item.preview),
              item.name,
              item.country,
              item.area,
              item.Duration,
              item.Grade,
              item.Activities,
              <div className={styles.options}>
                {
                  item.options.map((option, index) => (
                    <div key={index} className={styles.option}>
                      <Link href={option.link}>
                        {option.name}
                      </Link>
                    </div>
                  ))
                }
              </div>
            ])}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      </CacheProvider>
    </section>
  );
};

export default TrekkingTours;
