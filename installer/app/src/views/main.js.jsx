import UserAgent from './css/user-agent';
import { extend } from 'marbles/utils';
import Clusters from './clusters';

var Main = React.createClass({
	getDefaultProps: function () {
		return {
			css: {
				margin: 16,
				display: UserAgent.isSafari() ? '-webkit-flex' : 'flex'
			},
			childrenCSS: {
				flexGrow: 1,
				WebkitFlexGrow: 1
			}
		};
	},

	render: function () {
		return (
			<div style={this.props.css}>
				<div style={extend({}, this.props.childrenCSS, { marginRight: 16, maxWidth: 360, minWidth: 300, flexBasis: 360 })}>
					<Clusters dataStore={this.props.dataStore} />
				</div>

				<div style={this.props.childrenCSS}>
					{this.props.children}
				</div>
			</div>
		);
	}
});
export default Main;
