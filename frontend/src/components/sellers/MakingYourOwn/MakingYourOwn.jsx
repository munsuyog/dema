import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import './MakingYourOwn.css'

export default function MakingYourDecisionEasier() {
  return (
    <section className="makingyour-main pt">
      <div className="container">
        <h1 className="title1">
          <span>Decision?</span> Easier to make
        </h1>
        <div className="subtitles">
          <p>
            We studied every problem “successful” marketplaces eventually created for their sellers and shoppers. We want your journey with&nbsp;
            <label className="demafont">dema</label> to start with you&nbsp;
            <strong>owning your marketplace.</strong> Everything you see here is as “forever” as you decide it to be; no “bait & switch” gimmicks!
          </p>
        </div>
        <div className="makingyour-tablemain">
          <div className="maintablefirst">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>
                    <div className="mobilelogo">
                      <img alt="mobile logo 1" src="/images/sellers/makingyourdecision/mobilelogo1.png" />
                    </div>
                    <div className="desktoplogo">
                      <img alt="dema logo" src="/images/sellers/makingyourdecision/demalogo.svg" />
                    </div>
                  </th>
                  <th>
                    <div className="mobilelogo">
                      <img alt="mobile logo 2" src="/images/sellers/makingyourdecision/mobilelogo2.png" />
                    </div>
                    <div className="desktoplogo">
                      <img alt="amazon logo" src="/images/sellers/makingyourdecision/amazonlogo.svg" />
                    </div>
                  </th>
                  <th>
                    <div className="mobilelogo">
                      <img alt="mobile logo 3" src="/images/sellers/makingyourdecision/mobilelogo3.png" />
                    </div>
                    <div className="desktoplogo">
                      <img alt="walmart logo" src="/images/sellers/makingyourdecision/walmart.svg" />
                    </div>
                  </th>
                  <th>
                    <div className="mobilelogo">
                      <img alt="mobile logo 4" src="/images/sellers/makingyourdecision/mobilelogo4.png" />
                    </div>
                    <div className="desktoplogo">
                      <img alt="ebay logo" src="/images/sellers/makingyourdecision/ebay.svg" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {renderRows()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );

  function renderRows() {
    const rows = [
      {
        feature: 'Lowest Referral Fees',
        dema: 'done',
        amazon: 'close',
        walmart: 'close',
        ebay: 'close',
        description: 'As a seller, pay one fee (7%). Compare dema‘s fee vs the total fees of other marketplaces.',
        faqLink: '/faq#Sellers/Fees'
      },
      {
        feature: 'No Processing Fees',
        dema: 'done',
        amazon: 'done',
        walmart: 'done',
        ebay: 'dollar',
        description: 'The fee other marketplaces charge for taking a customer’s various payments.',
        faqLink: '/faq#Sellers/Fees'
      },
      {
        feature: 'No Advertising Fees',
        dema: 'done',
        amazon: 'close',
        walmart: 'close',
        ebay: 'dollar',
        description: 'The fee you pay elsewhere to advertise & compete to show up in results.',
        faqLink: '/faq#Sellers/Fees'
      },
      {
        feature: 'No competition from the marketplace',
        dema: 'done',
        amazon: 'close',
        walmart: 'close',
        ebay: 'done',
        description: 'By contract, dema doesn’t copy or re-sell products you’ve listed in your store.',
        faqLink: '/faq#Sellers/Support_&_Policies'
      },
      {
        feature: 'No Recurring Fees',
        dema: 'done',
        amazon: 'close',
        walmart: 'done',
        ebay: 'done',
        description: 'Other marketplaces charge recurring fees justifying them as fixed overhead costs.',
        faqLink: '/faq#Sellers/Fees'
      },
      {
        feature: 'No Listing Fees',
        dema: 'done',
        amazon: 'done',
        walmart: 'done',
        ebay: 'dollar',
        description: 'Some marketplaces charge to list your store’s contents. List with dema for free.',
        faqLink: '/faq#Sellers/Fees'
      },
      {
        feature: 'Buy-Box you can see and change',
        dema: 'done',
        amazon: 'close',
        walmart: 'close',
        ebay: 'close',
        description: 'We publish all algorithm rules so you understand how to best compete with others, not us.',
        faqLink: 'faq#Sellers/Features'
      },
      {
        feature: 'Shoppers save on every purchase',
        dema: 'done',
        amazon: 'close',
        walmart: 'close',
        ebay: 'close',
        description: 'Shoppers get 4% on every purchase; an incentive to experience the value dema delivers.',
        faqLink: '/faq#Sellers/Features'
      },
      {
        feature: 'Receive ownership when you buy or sell',
        dema: 'done',
        amazon: 'close',
        walmart: 'close',
        ebay: 'close',
        description: 'Receive ownership tokens without paying for them. Simply buy or sell on dema.',
        faqLink: '/faq#Sellers/Features'
      },
      {
        feature: 'Govern the marketplace',
        dema: 'done',
        amazon: 'close',
        walmart: 'close',
        ebay: 'close',
        description: 'Use your tokens to create & vote on ballots to change rules & policies @ dema.',
        faqLink: '/faq#Sellers/Features'
      }
    ];

    return rows.map((row, index) => (
      <tr key={index}>
        <td>
          {row.feature}
          <Popup
            trigger={
              <Link to="#">
                <img alt="" src="/images/sellers/makingyourdecision/qustion.svg" />
              </Link>
            }
            position={"top center"}
            offsetX={5}
            closeOnDocumentClick
          >
            <div className='nofees'>
              {row.description}
              <Link to={row.faqLink} className="readmore">
                learn more
                <img alt="" src="/images/sellers/makingyourdecisionour-features/arrow-right.svg" />
              </Link>
            </div>
          </Popup>
        </td>
        <td>
          <img alt="" src={`/images/sellers/makingyourdecision/${row.dema}.svg`} />
        </td>
        <td>
          <img alt="" src={`/images/sellers/makingyourdecision/${row.amazon}.svg`} />
        </td>
        <td>
          <img alt="" src={`/images/sellers/makingyourdecision/${row.walmart}.svg`} />
        </td>
        <td>
          <img alt="" src={`/images/sellers/makingyourdecision/${row.ebay}.svg`} />
        </td>
      </tr>
    ));
  }
}
