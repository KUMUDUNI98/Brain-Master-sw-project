import React, {Component} from 'react';
import Leaderboard from "../sup-components/Leaderboard";
import NewsBoard from "../sup-components/NewsBoard";
import EventBoard from "../sup-components/EventBoard";
import Advertisements from "../sup-components/Advertisements";

class UserDashBoard extends Component {
    render() {
        return (
            <div>
                <h4 className="text-center">Dashboard</h4>
                <br />
                <div className="row">
                    <div className="col-sm-4">
                        <Advertisements />
                    </div>
                    <div className="col-sm-4">
                        <NewsBoard />
                        <br />
                        <EventBoard />

                    </div>
                    <div className="col-sm-4">
                        <Leaderboard />
                    </div>
                </div>


            </div>
        );
    }
}

export default UserDashBoard;