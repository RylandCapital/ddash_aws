import * as React from 'react';
import './index.css';
import { widget } from '../../charting_library/charting_library.min';
import Datafeed from './datafeed.js';
import { indicator } from './indicator_template.js';
import { setCurrentUser } from "../../actions/authActions";
import store from "../../store";
import jwt_decode from "jwt-decode";


function getLanguageFromURL() {
	const regex = new RegExp('[\\?&]lang=([^&#]*)');
	const results = regex.exec(window.location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function test() {
	
	if (localStorage.jwtToken) {
		// Set auth token header auth
		const token = localStorage.jwtToken;
		// Decode token and get user info and exp
		const decoded = jwt_decode(token);
		// Set user and isAuthenticated
		
		const currentloggeduser = store.dispatch(setCurrentUser(decoded));
		
		console.log(store.dispatch(setCurrentUser(decoded)))
	    // Check for expired token
	    return currentloggeduser	
}
	  }
	

export class TVChartContainer extends React.PureComponent {
	static defaultProps = {
		symbol: '_VIX/VXV',
		interval: 'D',
		containerId: 'tv_chart_container',
		datafeed: Datafeed,
		libraryPath: '/charting_library/',
		chartsStorageUrl: 'http://ec2-18-222-179-255.us-east-2.compute.amazonaws.com',
		chartsStorageApiVersion: '1.1',
		clientId: 'Option-i',
		userId: 'RylandCapital'.concat(test().payload.name), 
		fullscreen: false,
		autosize: true,
		studiesOverrides: {},
		load_last_chart: true,
	};
	

	tvWidget = null;

	componentDidMount() {
		const widgetOptions = {
			symbol: this.props.symbol,
			datafeed: this.props.datafeed,
			interval: this.props.interval,
			container_id: this.props.containerId,
			library_path: this.props.libraryPath,
			locale: getLanguageFromURL() || 'en',
			disabled_features: ['use_localstorage_for_settings'],
			enabled_features: ['study_templates'],
			charts_storage_url: this.props.chartsStorageUrl,
			charts_storage_api_version: this.props.chartsStorageApiVersion,
			client_id: this.props.clientId,
			user_id: this.props.userId,
			fullscreen: this.props.fullscreen,
			autosize: this.props.autosize,
			load_last_chart: this.props.load_last_chart,
			custom_indicators_getter: indicator
		};

		const tvWidget = new widget(widgetOptions);
		this.tvWidget = tvWidget;

		tvWidget.onChartReady(() => {
			///tvWidget.chart().createStudy('Equity', false, false)
			/*tvWidget.getSavedCharts(function(data) {
				tvWidget.loadChartFromServer(data[0])
				console.log("Saved Charts:", data);	
			});*/

			tvWidget.subscribe('onAutoSaveNeeded', function() {
				tvWidget.saveChartToServer(function(data) {
					console.log("Got chart save");
				});
			});

			tvWidget.headerReady().then(() => {
				const button = tvWidget.createButton();
				button.setAttribute('title', 'Click to show a notification popup');
				button.classList.add('apply-common-tooltip');
				button.addEventListener('click', () => tvWidget.showNoticeDialog({
					title: 'Notification',
					body: 'TradingView Charting Library API works correctly',
					callback: () => {
						console.log('Noticed!');
					},
				}));

				button.innerHTML = 'Check API';
				
			});
		});
	}

	componentWillUnmount() {
		if (this.tvWidget !== null) {
			this.tvWidget.remove();
			this.tvWidget = null;
		}
	}

	render() {
		return (
			<div
				id={ this.props.containerId }
				className={ 'TVChartContainer' }
			/>
		);
	}
}
