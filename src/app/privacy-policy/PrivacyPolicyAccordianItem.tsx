"use client";
import React, { useState, Fragment } from "react";
import PrivacyPolicyData from "../components/PrivacyPolicyData";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const SubLevelComp = ({ item, renderNestedLevels }) => {
  const [selected, setselected] = React.useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setselected(selected === "" ? "active" : "");
    setActiveIndex(index);
  };

  const hasChidlren = (item) => {
    return Array.isArray(item.children) && item.children.length > 0;
  };

  return (
    <Fragment>
      <div className="accordian_item" title={activeIndex}>
        <h1
          onClick={() => toggle()}
          className={selected ? "heading close" : "heading open"}
        >
          <span>
            {selected === "active" ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </span>{" "}
          {item.title}
          {hasChidlren(item)}
        </h1>
        {selected && (
          <div className="acoridain_content_block">
            <p dangerouslySetInnerHTML={{ __html: item.paragraph }}></p>

            {hasChidlren(item) && renderNestedLevels(item.children)}
          </div>
        )}
      </div>
    </Fragment>
  );
};

function Accordion() {
  const renderNestedLevels = (data) => {
    return data.map((item, itemIndex) => (
      <SubLevelComp
        item={item}
        renderNestedLevels={renderNestedLevels}
        key={itemIndex}
      />
    ));
  };

  return renderNestedLevels(PrivacyPolicyData);
}

export default function PrivacyPolicyAccordianItem() {
  return (
    <>
      <Accordion />
    </>
  );
}
