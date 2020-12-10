import { Construct } from 'constructs';
import { App, Chart, ChartProps } from 'cdk8s';
import { WebService } from './lib/WebService';
                                        
export class MyChart extends Chart {    
  constructor(scope: Construct, id: string, props: ChartProps = { }) {
    super(scope, id, props);            

    new WebService(this, 'hello', { image: 'paulbouwer/hello-kubernetes:1.7', replicas: 10 });
    new WebService(this, 'ghost', { image: 'ghost', containerPort: 2368 });
                                        
  }
}

const app = new App();
new MyChart(app, 'hello-world');
app.synth();
