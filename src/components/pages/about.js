import React, {Component} from 'react';

export class about extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={contentStyle}>
                <h1 style={titleStyle}>About Me</h1>
                <p style={contentStyle}>
                    Picture a 13 year old billangual guy in front of his computer playing minecraft. Let that guy be me.
                    </p><br></br>
                    <p> <br></br>
                    I got chellenged to make a minecraft mod. Fast forward a month and there I was with my custom, self-coded emerald pickaxe.
                    Now I do not want to fool you I didn't learn any languages at that time, I barely understood basic concepts but I could salvage
                    different little scripts, change the variables to the ones I was using and maybe edit something else if I felt adventureous. From
                    that point on I went to school and after a football practice I was sitting in my room in frontof my computer, not playing but
                    absorbing all the information I could.
                    Now fast forward five years after that incident I find myself writing this very monologue on this paragraph thinking that maybe, just maybe the dream
                    of that 13-14 year old child may very well be in the realms of reality.
                    </p>
                </div>
            </React.Fragment>
        )
    }
}
const titleStyle = {
    float: 'top',
    textDecoration:'none',
    fontSize: "25px",
    color: "black"
}
const contentStyle = {
    background: "#a3a0bc",
    float: 'left',
    textDecoration: 'none',
    textAlign: 'left',
    fontSize: "20px",
}



export default about

