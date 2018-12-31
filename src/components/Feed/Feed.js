import React , {Component} from 'react'
import Footer from '../common/Footer'
import Post from '../Post/Post'
import HeaderFeed from '../common/HeaderFeed'
import '../common/Right-Left.css'
//import {Link} from 'react-router-dom'
class Feed extends Component {
 



    render(){
        return (
            <div>

            <HeaderFeed />
            <div className="container neeche">
            <div className="row">
            <div className="col-md-3 safed peeche gol thodaneeche">
            
            <center><u><b>Upcoming Events</b></u></center>
            
            </div>
            <div className="col-md-6 aage">
            
            <div className="row safed">
            <form method="post" action="">
            <input type="text" className="form-control bada" id="validationCustom01" placeholder="Write Something here..." />
                <br />
               
                <div className="btn btn-danger" onClick={()=>{}}>Photo here --></div>&nbsp;&nbsp;&nbsp;
                <input type="file" className="badakaro"name="pic" placeholder="Add Photo" accept="image/*" required/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-primary">Upload</button>
            </form>
            </div>
            <div className="row">
            


            <section>
            <Post nickname="Chris" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
            <Post nickname="OG" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />

            </section>




            </div>
            
            
            
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="col-md-3 safed gol thodaneeche">
            <center><u><b>Leaderboard</b></u></center>
            
            </div>
            </div>
            </div>
        )
        
            <Footer/>
            </div>
            
        )
    }
}

export default Feed