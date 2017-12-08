const React = require( 'react' )
const Component = require( 'react' ).Component
const renderer = require( 'react-test-renderer' )

const context = {
	'React': React,
}

const XDebugControl = require( './../../../src/Component/XDebugControl' )( context )

describe( '<XDebugControl/>', function () {
	const defaultProps = {
		container: function () {
			return {
				readXdebugStatus: function () {
				},
			}
		},
	}

	it( 'renders correctly provided no props', function () {
		const props = {}

		const component = renderer.create( <XDebugControl {...props}/> )
		let tree = component.toJSON()

		expect( tree ).toMatchSnapshot()
	} )

	it( 'renders correctly when the site loading status is undefined', function () {
		const props = Object.assign( {site: {}}, defaultProps )

		const component = renderer.create( <XDebugControl {...props}/> )
		let tree = component.toJSON()

		expect( tree ).toMatchSnapshot()
	} )

	it( 'renders correctly when the site is loading', function () {
		const props = Object.assign( {site: {loading: true}}, defaultProps )

		const component = renderer.create( <XDebugControl {...props}/> )
		let tree = component.toJSON()

		expect( tree ).toMatchSnapshot()
	} )

	it( 'renders correctly when the site produces an error with no message', function () {
		const props = Object.assign( {site: {loading: false, hasError: true}}, defaultProps )

		const component = renderer.create( <XDebugControl {...props}/> )
		let tree = component.toJSON()

		expect( tree ).toMatchSnapshot()
	} )

	it( 'renders correctly when the site produces an error with a message', function () {
		const props = Object.assign( {site: {loading: false, hasError: true, error: 'An error happened'}}, defaultProps )

		const component = renderer.create( <XDebugControl {...props}/> )
		let tree = component.toJSON()

		expect( tree ).toMatchSnapshot()
	} )

	it( 'renders correctly when the container prop is undefined', function () {
		const props = {site: {loading: false}}

		const component = renderer.create( <XDebugControl {...props}/> )
		let tree = component.toJSON()

		expect( tree ).toMatchSnapshot()
	} )
} )
