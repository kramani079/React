import React,{Component} from "react";
import "./card.css";

class Cardcomponent extends Component{
    render(){
        return(
            <>
            <div className="user-card">
                <img src="https://imgs.search.brave.com/QFQNUtVLLolTPGzDFC2KJiyd9OxA4r3MledHo0LyPuk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/NzU5MzcyMi9waG90/by9zaHJlZS1kd2Fy/a2FkaGlzaC10ZW1w/bGUtZ3VqYXJhdC1p/bmRpYS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9UGVUelZW/SUYyYW9SR09rOFNS/NW5mLTF3NkxkNFZo/NlRGeXN5c05pS3BM/RT0" />
                <button>Follow</button>
                <p>JAY DWARKADHIS</p>
            </div>
            </>
        );
    }
}

export default Cardcomponent;
