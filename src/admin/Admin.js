import React from 'react';
import Navigation from '../UI/Navigation';
import Footer from '../UI/Footer';
import DashMenu from '../UI/adminUI/DashMenu';
import { ButtonText } from "../UI/adminUI/menuButton/ButtonText";


const Admin = () => {
        return (
            <div className="row" >
                <div className="col-md-2" />
                <div className="col-md-8 main-container" >
                    <Navigation />
                    <DashMenu menuText = {ButtonText.courseText} />
                    <DashMenu menuText = {ButtonText.studentText} />
                    <DashMenu menuText = {ButtonText.tutorText} />
                    <Footer />
                </div>
                <div className="col-md-2" />
            </div>
        );
}

export default Admin;