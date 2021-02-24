
import React from 'react';
import Card from './Card';


const CardList = ({ RobotData }) => {
    return (
        <div>{
            RobotData.map((value, i) => {
                return <Card key={i}
                    id={RobotData[i].id}
                    name={RobotData[i].name}
                    email={RobotData[i].email} />
            })
        }
        </div>
    )
}

export default CardList;