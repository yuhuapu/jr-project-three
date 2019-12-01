import React from 'react';
import Navigation from '../../../Navigation';
import DashMenu from '../../DashMenu';
import TutorForm from '../../listModal/components/TutorForm';
import PageNumber from '../../listModal/components/PageNumber';
import Footer from '../../../Footer';
import SearchBar from './SearchBar';


import { ButtonText } from "../../menuButton/ButtonText";

const AdminTutorSearch = () => {
        return (
            <div className="row" >
                <div className="col-md-2" />
                <div className="col-md-8" >
                    <Navigation />
                    <DashMenu 
                        menuText = {ButtonText.tutorText} 
                        styleText = {ButtonText.styleText[1]} 
                    />
                    <SearchBar />
                    <TutorForm />
                    <PageNumber />
                    <Footer /> 
                </div>
                <div className="col-md-2" />
            </div>
        );
}

export default AdminTutorSearch;