import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { data } from "./CareersData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Root = styled.div``;
const Heading = styled.div`
  font-size: 1.5rem;

  font-weight: 500;
  color: #104d89;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.5rem;
`;
const CareersContainer = styled.div`
  margin-top: 1.5rem;
  .accordionSummary {
    display: flex;
    flex-direction: column;
  }
  .Accordion {
    margin-bottom: 0.5rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .title {
    font-size: 1.2rem;
    font-weight: 500;
    color: #3e5988;
  }
  .subtitle {
    font-size: 1rem;
    font-weight: 400;
    color: #3e5988;
  }
  .descriptionTitle {
    font-size: 1rem;
    font-weight: 500;
    color: #3e5988;
  }
  .ExpandIcon {
    color: #3e5988;
  }
  .description {
    font-size: 0.9rem;
    color: #595959;
    margin-top: 1rem;
  }
`;

const Careers = () => {
  return (
    <Root>
      <Heading>Careers</Heading>

      <CareersContainer>
        {data.map((item, index) => {
          return (
            <Accordion className="Accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="ExpandIcon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className="accordionSummary">
                  <span className="title">{item.title}</span>
                  <span className="subtitle">{item.subTitle}</span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <span className="descriptionTitle">Job Description</span>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html: item.description,
                  }}
                ></div>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </CareersContainer>
    </Root>
  );
};

export default Careers;
