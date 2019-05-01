import React, {ReactNode} from "react";

import Layout from 'antd/lib/layout';

import styles from '../../assets/css/layout/MainPage.module.css';

const { Header, Content, Footer } = Layout;

export default class MainPageComponent extends React.Component<{}, {}>{

    render(): ReactNode {
        return (
            <div className={styles.centerAlign}>

                <Layout>
                    <Header className={styles.header}>STAR WARS</Header>
                    <Content className={styles.content}>Каталог для отображения персонажей</Content>
                    <Footer className={styles.footer}>Андрей Романов ©2019</Footer>
                </Layout>

            </div>
        );
    }

}
