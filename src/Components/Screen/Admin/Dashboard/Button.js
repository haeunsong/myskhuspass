import React from 'react'

import {AccessLogButtonViewer,DlAccessLogButtonViewer,KioskButtonViewer,AdminListButtonViewer,BackButtonViewer} from './Resource/Style/StButton';

export const AccessLogButton = ({ onClick }) => (
    <AccessLogButtonViewer onClick={onClick}>출입기록</AccessLogButtonViewer>
);

export const DlAccessLogButton = ({ onClick }) => (
    <DlAccessLogButtonViewer onClick={onClick}>출입기록 다운로드</DlAccessLogButtonViewer>
);
export const AdminListButton = ({ onClick }) => (
    <AdminListButtonViewer onClick={onClick}>관리자 목록</AdminListButtonViewer>
);
export const KioskButton = ({ onClick }) => (
    <KioskButtonViewer onClick={onClick}>키오스크</KioskButtonViewer>
);
export const BackButton = ({onClick}) => <BackButtonViewer onClick={onClick}>뒤로가기</BackButtonViewer>;

