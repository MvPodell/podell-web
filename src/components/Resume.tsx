'use client';
import React from "react";
import styles from "@/styles/app.module.scss";
import classNames from "classnames";

export const Resume = () => {
    return (
        <div className={classNames(
            [styles.resumeContainer]     
        )}>
            <iframe className="resume" src="/MaxPodellResumeJuly.pdf" width="612" height="792"></iframe>
        </div>
        )
}