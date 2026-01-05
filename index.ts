import { Navigation } from 'react-native-navigation';
import App from './App';


Navigation.registerComponent('com.myApp.HomeScreen', () => App);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'com.myApp.HomeScreen',
                                        options: {
                                            bottomTab: {
                                                text: 'ホーム',
                                            },
                                            topBar: {
                                                title: {
                                                    text: 'ホーム'
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    },
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'com.myApp.HomeScreen',
                                        options: {
                                            bottomTab: {
                                                text: '設定'
                                            },
                                            topBar: {
                                                title: {
                                                    text: '設定'
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    });
});