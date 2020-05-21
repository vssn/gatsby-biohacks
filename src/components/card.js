import React from "react"
import { mode } from "../utils/colorMode"

function calculateEffort(effort = 1) {
  return <>{"😅".repeat(effort)}</>
}

function calculateGain(gain = 1) {
  return <>{"💪".repeat(gain)}</>
}

const label = {
  textTransform: "uppercase",
  fontSize: 12,
  fontWeight: 900,
  fontFamily: "Helvetica Neue, sans-serif",
  margin: "0px -10px 0 -10px",
  padding: "0 10px 0 10px",
}

const Card = props => {
  const { category, title, short, effort, gain } = props
  console.log(props)

  return (
    <div
      style={{
        boxShadow: `0px 3px 10px ${mode("#ddd", "#222")}`,
        padding: "10px",
        marginBottom: "50px",
      }}
    >
      <p
        style={{
          textAlign: "right",
          ...label,
          color: "#ddd",
          borderBottom: "1px solid #ddd",
        }}
      >
        {category}
      </p>
      <h3
        style={{
          fontWeight: 200,
          margin: "10px 0 0 0",
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 14, margin: "10px 0 10px 0" }}>{short}</p>
      <p
        style={{
          ...label,
          display: "flex",
          color: "#aaa",
          borderTop: "1px solid #ddd",
          justifyContent: "space-between",
        }}
      >
        <span>Aufwand {calculateEffort(effort)}</span>{" "}
        <span>Gewinn {calculateGain(gain)}</span>
      </p>
    </div>
  )
}

export default Card
