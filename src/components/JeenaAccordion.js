import { Fragment, useCallback, useState } from "react";
import { Accordion } from "react-bootstrap";

const defaultAccordionData = [
  {
    id: 1,
    title: "What is bad debt recovery?",
    description: "Bad debt recovery refers to the process of recovering unpaid debts from individuals or businesses that have defaulted on their financial obligations."
  },
  {
    id: 2,
    title: "Why should I use a bad debt recovery service?",
    description: "A professional bad debt recovery service has the expertise, resources, and legal knowledge to effectively pursue and recover unpaid debts, which can save you time, reduce stress, and increase the likelihood of successful recovery.",
    largeDescription: true
  },
  {
    id: 3,
    title: "What types of debts can you help recover?",
    description: "We assist in recovering various types of debts including personal loans, commercial loans, credit card debts, medical bills, utility bills, and any other form of unpaid receivables."
  },
  {
    id: 4,
    title: "How do you approach debt recovery?",
    description: "Our approach includes: Initial assessment and documentation review, contacting the debtor through phone calls, letters, and emails, negotiating repayment plans if possible, and legal action as a last resort."
  },
  {
    id: 5,
    title: "What are the costs associated with your services?",
    description: "Our fees are usually a percentage of the recovered amount, ensuring that we are motivated to achieve the best results for you. Specific rates can be discussed during a consultation."
  },
  {
    id: 6,
    title: "How long does the debt recovery process take?",
    description: "The duration of the recovery process can vary depending on the complexity of the case and the debtor’s willingness to cooperate. It can range from a few weeks to several months."
  },
  {
    id: 7,
    title: "Is my information kept confidential?",
    description: "Absolutely. We adhere to strict confidentiality policies to ensure that all client and debtor information is securely handled."
  },
  {
    id: 8,
    title: "What happens if the debt cannot be recovered?",
    description: "While we employ all possible methods to recover debts, there are cases where recovery is not possible. In such instances, we provide a detailed report of our efforts and reasons for non-recovery."
  },
  {
    id: 9,
    title: "Can you handle international debt recovery?",
    description: "Yes, we have a network of international partners and legal experts to assist in recovering debts from debtors located outside India."
  },
  {
    id: 10,
    title: "What legal actions can you take to recover debts?",
    description: "Legal actions may include filing a lawsuit, obtaining a court judgment, and executing the judgment through various means such as garnishing wages or seizing assets."
  },
  {
    id: 11,
    title: "What documents do I need to provide for debt recovery?",
    description: "Typically, you will need to provide: Original contract or agreement, proof of the debt (invoices, receipts, etc.), any correspondence with the debtor, personal identification and debtor’s information."
  },
  {
    id: 12,
    title: "How do I get started with your services?",
    description: "You can get started by contacting us through our website or calling our customer service number. We will schedule a consultation to discuss your case in detail and outline the next steps."
  },
  {
    id: 13,
    title: "Are there any upfront costs involved?",
    description: "In most cases, there are no upfront costs. Our service charges are contingent upon successful recovery, meaning we only get paid when you do."
  },
  {
    id: 14,
    title: "How do you ensure compliance with legal and ethical standards?",
    description: "We strictly adhere to all applicable laws and regulations governing debt collection in India. Our team is trained to conduct recovery efforts professionally and ethically."
  },
  {
    id: 15,
    title: "Can you recover debts from insolvent or bankrupt individuals?",
    description: "Recovering debts from insolvent or bankrupt individuals is challenging but not impossible. We evaluate such cases individually to determine the best course of action."
  },
];

const JeenaAccordion = ({ defaultActive, accordions, accordionsData }) => {
  const [active, setActive] = useState(defaultActive ? defaultActive : 2);
  const [data, setData] = useState(
    accordionsData ? accordionsData : defaultAccordionData
  );
  const toggleAccordion = useCallback(
    (value) => {
      setActive(value === active ? null : value);
    },
    [active]
  );

  return (
    <Accordion defaultActiveKey={active}>
      {data.map(
        (accordion) =>
          accordions.includes(accordion.id) && (
            <div className="accordion-item" key={accordion.id}>
              <h5 className="accordion-header">
                <Accordion.Toggle
                  as="button"
                  className={`accordion-button ${
                    accordion.id === active ? "" : "collapsed"
                  }`}
                  eventKey={accordion.id}
                  onClick={() => toggleAccordion(accordion.id)}
                >
                  {accordion.title}
                </Accordion.Toggle>
              </h5>
              <Accordion.Collapse
                eventKey={accordion.id}
                data-bs-parent="#faq-accordion"
              >
                <div className="accordion-body">
                  {accordion.largeDescription ? (
                    <Fragment>
                      <p>{accordion.description}</p>
                      <hr />
                      <div className="row">
                        <div className="col-lg-6">
                          {/* <p>
                            On the other hand, we denounce with righteous
                            indignation and dislike men who are so beguiled and
                            demoralized by the charms of pleasure of the moment
                            blinded by desire, that they cannot foresee the pain
                            and trouble bound
                          </p>
                          
                          <ul className="list-style-one my-15">
                            <li>Comprehensive UI/UX Assessment</li>
                            <li>Deep Contextual Research and 360° Planning</li>
                            <li>Wireframing &amp; Prototyping</li>
                          </ul> */}
                          <ul>
                            <li>Original contract or agreement</li>
                            <li>proof of the debt (invoices, receipts, etc.)</li>
                            <li>Any correspondence with the debtor</li>
                            <li>Personal identification and debtor’s information</li>
                          </ul>
                                                  </div>
                        <div className="col-lg-6 my-15 text-lg-end">
                          <img
                            src="assets/images/about/inner-faq.jpg"
                            alt="Faqs"
                          />
                        </div>
                      </div>
                    </Fragment>
                  ) : (
                    <p>{accordion.description}</p>
                  )}
                </div>
              </Accordion.Collapse>
            </div>
          )
      )}
    </Accordion>
  );
};

export default JeenaAccordion;

const JeenaAccordion2 = ({ accordionsData }) => {
  const [active, setActive] = useState(1);
  const toggleAccordion = useCallback(
    (value) => {
      setActive(value === active ? null : value);
    },
    [active]
  );

  return (
    <Accordion defaultActiveKey={active}>
      {accordionsData.map((accordion) => (
        <div className="accordion-item" key={accordion.id}>
          <h5 className="accordion-header">
            <Accordion.Toggle
              as="button"
              className={`accordion-button ${
                accordion.id === active ? "" : "collapsed"
              }`}
              eventKey={accordion.id}
              onClick={() => toggleAccordion(accordion.id)}
            >
              {accordion.title}
            </Accordion.Toggle>
          </h5>
          <Accordion.Collapse
            eventKey={accordion.id}
            data-bs-parent="#faq-accordion"
          >
            <div className="accordion-body">
              <p>{accordion.description}</p>
            </div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};

export { JeenaAccordion2 };
