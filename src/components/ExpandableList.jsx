import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../config/styles/themes';

import {useWindowSize} from '../utilities/UseWindowSize'

import { virtualFullWidth, availableWidth } from '../config/styles/page_width';
import { screenWidthSettings } from '../config/styles/page_width';

import { colors } from '../config/styles/colors';
import { componentStyles } from '../config/styles/styles';
import { logoImages } from '../img/logos'
import { images } from '../img/images';

import ExpandableBox from '../components/ExpandableBox';

const ExpandableList = (props) => {
    
    const { issueKey, issue } = props;
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;

    const dividerStyle = {
        width: '100%',
        height: '1px',
        backgroundColor: colors.gray6,
        margin: isSmallScreen ? '12px 0' : '16px 0', // Adjust the margins as needed
    }

    // Content
    const textBody = issue.body.split('~').map((line, index) => (
        <p key={index}>
            {line}
        </p>
    ));

    return (
        <div>

            <div key={issueKey}>
                <ExpandableBox key={issueKey} title={issue.title} data={textBody} />
            </div>

        </div >
    );
}

export default ExpandableList;
