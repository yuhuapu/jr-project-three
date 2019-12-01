import React from 'react';
import Navigation from '../UI/Navigation';
import Footer from '../UI/Footer';
import DashMenu from '../UI/adminUI/DashMenu';
import { ButtonText } from "../UI/adminUI/menuButton/ButtonText"


const Admin = () => {
        return (
            <div className="row" >
                <div className="col-md-2" />
                <div className="col-md-8 main-container" >
                    <Navigation />
                    <DashMenu 
                        menuText = {ButtonText.courseText}
                        styleText = {ButtonText.styleText[0]} 
                    />
                    <DashMenu 
                        menuText = {ButtonText.studentText}
                        styleText = {ButtonText.styleText[0]} 
                    />
                    <DashMenu 
                        menuText = {ButtonText.tutorText}
                        styleText = {ButtonText.styleText[0]} 
                    />
                    <Footer />
                </div>
            </div>
        );
    }

export default Admin;