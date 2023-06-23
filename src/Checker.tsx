import React, { useState } from "react";
import styled from "styled-components";
import { Heading, Textarea, Box } from '@primer/react'

export default function Checker() {
  const [input, setInput] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(event.target.value)
  }

  return (
    <StyledChecker>
      <Textarea
        value={input}
        onChange={handleChange}
        sx={{ marginTop: 4 }}
      />
      {input.length > 0 && (
        <><Heading as="h3" sx={{ color: "fg.default", marginTop: 3 }}>Kết quả:</Heading>
          <div className="result-characters">
            {input.split("").map((char, index) => {
              let available = false;
              if (char.match(VIETNAMESES_REGEX) || char.match(SPECIAL_REGEX) || char.match(/\d/g) || char.match(/\s+/g)) {
                available = true;
              }
              return (
                <Box
                  bg={available ? "success.muted" : "danger.muted"}
                  color={available ? "success.fg" : "danger.fg"}
                  key={`${char}_${index}`}
                >
                  {char}
                </Box>
              )
            })}
          </div>
        </>
      )}
    </StyledChecker>
  )
}

const VIETNAMESES_REGEX = /[aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ]/g
const SPECIAL_REGEX = /[!@#%^&*()_+\-=[\]{}|;':",./<>?~`\\]+/g

const StyledChecker = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;

  h3 {
    font-size: 16px;
    line-height: 20px;
  }

  .result-characters {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 8px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      width: 20px;
      padding: 4px 0px;

    }
  }
`
