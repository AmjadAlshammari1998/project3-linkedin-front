import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "./About.css";

export default function about() {
    return (
        <div>
            <h1>about</h1>
            <h3>linkedin</h3>
            <div className='about1'>
            <ul>
                <li><em>عام</em></li>
                <br></br>
                <li>إنشاء حساب</li>
                <li>مركز المساعدة</li>
                <li>نبذة عن</li>
                <li>صحافة</li>
                <li>مدونة</li>
                <li>المهن</li>
                <li>المطورون</li>
            </ul>
            </div>
            <div className='about2'>
            <ul>
                <li>تصفح LinkedIn</li>
                <br></br>
                <li> التعليم</li>
                <li>الوظائف</li>
                <li>الراتب</li>
                <li>الجوال</li>
                <li>الخدمات</li>
                <li>المنتجات</li>
            </ul>
            </div>
            <div className='about3'>
            <ul>
                <li>حلول الأعمال التجارية</li>
                <br></br>
                <li>المواهب</li>
                <li>التسويق</li>
                <li>المبيعات</li>
                <li>التعليم</li>
            </ul>
            </div>
            <div className='about4'>
            <ul>
                <li>الدليل</li>
                <br></br>
                <li> </li>
                <li>الوظائف</li>
                <li>الشركات</li>
                <li>الرواتب</li>
                <li>منشورات</li>
                <li>رسائل اخباريه </li>
                <li>جامعات</li>
            </ul>
            </div>
        </div>
    )
}
