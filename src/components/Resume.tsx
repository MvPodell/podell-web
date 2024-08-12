"use client";

import React, { useRef, useEffect } from "react";
import styles from "@/styles/app.module.scss";
import classNames from "classnames";

export const Resume = () => {
  return (
    <div>
      <div className={classNames([styles.resumeContainer])}>
        <iframe
          className="resume"
          src="/files/MaxPodellResumeJuly.pdf"
          width="612"
          height="792"
        ></iframe>
      </div>
    </div>
  );
};
