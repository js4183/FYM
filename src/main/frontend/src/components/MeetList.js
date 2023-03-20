import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from 'styled-components';

const CardContainer = styled.div`
  border-radius: 1rem;
  background-color: var(--color-white);
  filter: drop-shadow(2px 2px 6px var(--color-shadow));
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 25rem; */
  min-width: 20rem;
  > * {
    margin-bottom: 1.25rem;
  }
  .divider {
    margin: 0 0.4em 0.1em;
    overflow: hidden;
  }
  position: relative;
  .hovered {
    background-color: var(--color-maingreen--50);
  }
  cursor: pointer;
`;

const InfoHeader = styled.div`
  width: 100%;
  height: 0.875rem;
  font-size: 0.8rem;
  color: var(--color-gray);
  display: flex;
  align-items: center;
  justify-content: space-between;
  > * {
    overflow: hidden;
    height: 100%;
    display: flex;
  }
`;

const InfoBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    margin-bottom: 0.625rem;
  }
  > #icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  > #title {
    font-size: 1.25rem;
    font-family: Interop-SemiBold;
  }
  > #location {
    height: 0.875rem;
    overflow: hidden;
    font-size: 0.8rem;
    color: var(--color-gray);
    margin-bottom: 0;
    display: flex;
    > * {
      display: flex;
      #marker {
        margin-right: 0.15em;
      }
    }
  }
`;

const InfoFooter = styled.div`
  width: 100%;
  color: var(--color-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
`;

const MeetList = () => {
    const [list, setList] = useState([]);

    useEffect(()=>{
        axios.get("/meet/list").then((res)=>{
            setList(res.data);
        })
    },[]);
    return (
            <>
                {list.map(({ mt_idx, mt_maker, mt_title, mt_desc, mt_type, mt_date, mt_time, mt_place, mt_cnt, mt_member }) => {
                    return (
                        <RecommItem
                            key={mt_idx}
                            maker={mt_maker}
                            title={mt_title}
                            desc={mt_desc}
                            type={mt_type}
                            date={mt_date}
                            time={mt_time}
                            place={mt_place}
                            cnt={mt_cnt}
                            member={mt_member}
                        />
                    );
                })}
            </>
    );
};

const RecommItem = ({ key, maker, title, desc, type, date, time, place, cnt, member }) => {
    const toDetail = () =>{
        console.log(key);
    }
    return (
    <CardContainer onClick={toDetail}>
        <InfoHeader>
            <div>
                <div>{date}</div>
                <div className="divider">|</div>
                <div>{time}</div>
            </div>
            <div>
                <div>
                    {cnt<member? `현재 인원 ${cnt}명`: "다 찼어요"}
                </div>
                <div className="divider">|</div>
                <div>{member}명</div>
            </div>
        </InfoHeader>
        <InfoBody>
            <div id="icon">{title}</div>
            <div id="title">{desc}</div>
            <div id="location">
                <div>{type}</div>
                <div className="divider">|</div>
                <div>
                    <div>{place}</div>
                </div>
            </div>
        </InfoBody>
        <InfoFooter>
            {maker}
        </InfoFooter>
    </CardContainer>
    );
};

export default MeetList;