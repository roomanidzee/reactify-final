import React, {ReactNode} from "react";

import Layout from 'antd/lib/layout';

import styles from '../../assets/css/layout/MainPage.module.css';

const { Header, Content, Footer } = Layout;

export default class MainPageComponent extends React.Component<{}, {}>{

    render(): ReactNode {
        return (
            <div className={styles.centerAlign}>

                <Layout>
                    <Header className={styles.header + ' ' + styles.centerAlign}>STAR WARS</Header>
                    <Content className={styles.content + ' ' + styles.centerAlign}>
                        <div className={styles.centerAlign}>
                            Каталог для отображения персонажей
                        </div>
                    </Content>
                    <Footer className={styles.footer + ' ' + styles.centerAlign}>Андрей Романов ©2019</Footer>
                </Layout>

            </div>
        );
    }

}
