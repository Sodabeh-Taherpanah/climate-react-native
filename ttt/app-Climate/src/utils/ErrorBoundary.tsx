import {Component} from 'react';
import {Text} from 'react-native';

export class ErrorBoundary extends Component<
  {children: React.ReactNode},
  {hasError: boolean}
> {
  constructor(props: any) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error: any) {
    return {hasError: true};
  }

  componentDidCatch(error: any, info: any) {
    console.log('Error caught by Error Boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <Text>Something went wrong. Please try again later.</Text>;
    }

    return this.props.children;
  }
}
