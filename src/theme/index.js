import { createTheme } from '@mui/material/styles';

const theme= createTheme({
    palette: {
		primary: {
			main: '#FF8F00',
            dark: '#FFAB03',
            light: '#FFFFFF'
		},
		secondary: {
			main: '#04A3FF',
            dark: '#0381FF',
            light: '#025AB2'
		},
		success:{
			main: '#1b5e20'
		},
		error:{
			main: '#ffd600'
		},
		gray:{
			main:'#E6E6E6'
		}
	},
})

export default theme;