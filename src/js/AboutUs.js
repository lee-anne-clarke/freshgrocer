import React, { Component } from 'react'
import MainPage from './MainPage'
import { Parallax } from 'react-parallax'
import { 
	mainHeaderImgConfig,
	innerpTitleConfig 
} from './sr/srConfig'
import sr from './sr/ScrollReveal'

//images
import aboutHeader from '../img/aboutus/vinetomatoes2.jpg'
import manholdingpeas from '../img/aboutus/manholdingpeas.jpg'
import foodrack from '../img/aboutus/foodrack.jpg'
import veggies from '../img/aboutus/veggies4.jpg'


class AboutUs extends Component {

  componentDidMount = () => {
  	document.title = "About Our Company | The Fresh Grocer"

  	//Scroll Reveal
    sr.reveal(this.mainHeaderImg, mainHeaderImgConfig);
    sr.reveal(this.innerpTitle, innerpTitleConfig);
  }


  render() {
    return (
			<MainPage
				title="About Us" 
				paraBgImg={aboutHeader}>

        <section className="container">
          <p>Ut purus nulla, hendrerit eget blandit sit amet, suscipit ut odio. Morbi venenatis cursus turpis, non egestas ante porta vitae. Aenean non lectus cursus odio ullamcorper mollis ut id nibh. Praesent velit mi, sodales eu viverra et, convallis maximus quam. Vivamus erat mauris, posuere a mauris interdum, congue mattis turpis. Sed molestie lacinia justo eu scelerisque. Proin consequat fringilla tortor, quis sagittis massa consectetur ac. </p>
          <p>Aenean tellus turpis, euismod ut dapibus in, hendrerit eu massa. Donec semper consequat posuere. Nam condimentum, dolor ac scelerisque molestie, magna felis pulvinar justo, id commodo ante ipsum vitae nisl. Morbi iaculis diam sit amet viverra commodo. Donec finibus ante at nunc blandit, in aliquam magna hendrerit. Nunc sapien lacus, pellentesque eu lectus ut, imperdiet tempor ligula. Vivamus sed tincidunt purus, sed pharetra quam.</p>
          <p>In efficitur lectus sed sem rhoncus, vel porta dolor mollis. Nam sem velit, mollis sodales auctor vel, varius in ipsum. Maecenas egestas lectus id pellentesque porta. Mauris dignissim eget elit a commodo. Nunc leo diam, porta non turpis id, rhoncus imperdiet neque. Donec nec convallis tellus. Curabitur pretium molestie ex, at ultricies ipsum volutpat nec. In laoreet malesuada accumsan. Aliquam tincidunt orci volutpat ante euismod rutrum. Nullam facilisis molestie dui non eleifend.</p>
        </section>


        <Parallax bgImage={manholdingpeas} strength={300} />

        <section className="container">
          <h2>Nunc leo diam, porta non turpis id</h2>
          <p>Suspendisse aliquet at ante sed vestibulum. Nam nec massa nisl. Quisque dolor turpis, tincidunt iaculis turpis ac, iaculis rutrum diam. Proin feugiat ligula enim, eget mollis quam vestibulum sed. Aliquam sapien nisl, commodo vitae turpis quis, condimentum mattis dui. Aliquam erat volutpat. Aenean at purus felis. Etiam vehicula elit turpis, nec commodo magna bibendum id. Proin posuere, velit eget venenatis lobortis, diam ex luctus justo, sed tristique lacus metus posuere sem. Aliquam erat volutpat. Aliquam eu imperdiet massa, sit amet lobortis mi. Donec ornare orci id nisl sodales porta. Duis eu erat et magna lacinia auctor nec ut tortor. Donec eget accumsan urna. Suspendisse purus elit, rutrum ut purus in, sagittis sollicitudin nunc. </p>
          <p>Aenean tellus turpis, euismod ut dapibus in, hendrerit eu massa. Donec semper consequat posuere. Nam condimentum, dolor ac scelerisque molestie, magna felis pulvinar justo, id commodo ante ipsum vitae nisl. Morbi iaculis diam sit amet viverra commodo. Donec finibus ante at nunc blandit, in aliquam magna hendrerit. Nunc sapien lacus, pellentesque eu lectus ut, imperdiet tempor ligula. Vivamus sed tincidunt purus, sed pharetra quam.</p>
          <p>In efficitur lectus sed sem rhoncus, vel porta dolor mollis. Nam sem velit, mollis sodales auctor vel, varius in ipsum. Maecenas egestas lectus id pellentesque porta. Mauris dignissim eget elit a commodo. Nunc leo diam, porta non turpis id, rhoncus imperdiet neque. Donec nec convallis tellus. Curabitur pretium molestie ex, at ultricies ipsum volutpat nec. In laoreet malesuada accumsan. Aliquam tincidunt orci volutpat ante euismod rutrum. Nullam facilisis molestie dui non eleifend.</p>
          <p>Pellentesque commodo ante mollis lectus volutpat elementum. Quisque vulputate, turpis at pulvinar aliquet, augue dolor condimentum magna, quis rutrum nunc leo sodales augue. Integer nec lectus at ligula tristique commodo. Cras facilisis neque ac mi vehicula semper. Donec ut ultricies augue, congue posuere nulla. Phasellus consectetur arcu mi. Nunc enim libero, lobortis nec purus sed, ornare aliquet odio. Nullam in eros ac sapien consectetur interdum eget eu diam. Vivamus ultrices, sapien in interdum bibendum, mauris urna pulvinar dui, sed facilisis massa arcu eget nisi. Nulla facilisi.</p>
          <p>Pellentesque vestibulum nulla fermentum, feugiat urna vel, elementum ante. Ut semper accumsan libero quis scelerisque. Vivamus vel justo a augue consequat finibus sit amet eu magna. Nullam iaculis quis ipsum fringilla placerat. Fusce iaculis lectus vitae tellus bibendum, non tempus turpis viverra. Nulla ut efficitur tortor. Ut sed arcu at orci fermentum dignissim sed vel metus. </p>
        </section>


        <Parallax bgImage={foodrack} strength={300} />

        <section className="container">
          <h2>Ut risus justo, blandit non lacinia quis, laoreet in enim</h2>
          <p>Vestibulum pharetra commodo sapien a hendrerit. Mauris nec vehicula tellus. Sed laoreet tortor sed egestas tempor. Vestibulum et tortor erat. Praesent elit est, accumsan et facilisis vel, porta blandit neque. Mauris iaculis congue sem quis luctus. Nullam gravida sodales urna, euismod elementum nunc aliquet congue. Proin consectetur, lorem vitae lacinia aliquam, est tortor varius ligula, vitae dapibus massa metus ac ex. Fusce euismod auctor lacus, eget pellentesque orci convallis id. Donec luctus congue sem, vitae hendrerit mauris pharetra at. Ut lectus erat, suscipit eget eros id, aliquam viverra quam. Cras ut risus id turpis vestibulum pulvinar.</p>

          <p>Nunc faucibus nisl at nisl fringilla varius. Phasellus a nunc sapien. Curabitur at lacus egestas ligula placerat interdum. Nunc augue enim, interdum sed vulputate quis, vestibulum in magna. Mauris ut faucibus sapien, ut tempus sem. Cras eu tortor faucibus, condimentum dui ac, euismod justo. Morbi vitae porttitor felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl velit, porttitor vel ipsum vitae, iaculis sollicitudin ligula. Sed mollis dolor ac enim tincidunt lacinia. Proin tellus ante, posuere ac ipsum at, tempus maximus lacus. Integer nec consectetur erat. Curabitur sit amet congue arcu. Maecenas id lorem vitae velit scelerisque congue. Fusce accumsan ipsum tempor ante vestibulum semper.</p>

          <p>Vestibulum quam nisl, congue in lobortis eget, sollicitudin eget dui. Donec quis sem ex. Sed semper purus lorem, at consequat lorem elementum eu. Mauris id semper quam, vitae mollis dolor. Nam sodales risus vitae lectus pharetra, ut bibendum purus gravida. Mauris sed dui diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sit amet enim eu enim sodales egestas sed sit amet eros. Fusce eu lacus purus. Mauris bibendum iaculis libero eget rhoncus. Fusce id ante tristique, pharetra leo vitae, tincidunt mauris. Praesent a nibh et ex aliquet fermentum nec nec massa. Phasellus dapibus vehicula metus pulvinar dapibus. Nunc laoreet magna ut lobortis ultrices. Donec turpis magna, pharetra sit amet diam pulvinar, mollis laoreet risus. Morbi cursus est sed odio efficitur, eu vestibulum nibh tincidunt. </p>
        </section>


        <Parallax bgImage={veggies} strength={300} />

        <section className="container">
          <h2>Sed porta ac velit nec blandit</h2>
          <p>Maecenas porta, risus a dapibus vestibulum, dolor libero consequat felis, ac iaculis orci nibh nec purus. Morbi sit amet nisl viverra, laoreet mi imperdiet, suscipit nisl. In dignissim aliquet rhoncus. Morbi nulla est, sollicitudin in arcu ut, ullamcorper imperdiet libero. Cras tortor ex, viverra ut enim non, tristique euismod dolor. Praesent elementum tellus nec diam pulvinar finibus. Integer sodales mauris turpis, vel sollicitudin lacus porttitor eget. Sed nec tellus eu ex fermentum dapibus. Cras viverra nisl ac sagittis ultricies. Ut et scelerisque sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut diam nisi, commodo eu ipsum sed, vulputate gravida mi. Ut porta suscipit ante sit amet tempus. Sed aliquet erat et ligula pharetra, in laoreet nunc feugiat. Nunc vitae malesuada lorem.</p>

          <p>Nam tempor, augue eu pellentesque aliquam, nisi elit molestie purus, at tempor urna ligula nec augue. Vivamus vulputate auctor malesuada. Suspendisse dignissim eros nec bibendum ornare. Phasellus in lacinia ante. Nulla facilisi. Donec vitae justo sed est suscipit lacinia. Morbi laoreet sem in arcu efficitur, quis tristique est euismod. Phasellus molestie quam sit amet urna posuere rutrum. Proin mattis scelerisque quam, eu mattis diam vulputate at. Sed orci dolor, lacinia molestie bibendum nec, aliquam nec lorem. Maecenas porttitor velit vel imperdiet hendrerit. Suspendisse est ipsum, cursus nec euismod non, varius non turpis. Ut malesuada, libero at tristique condimentum, elit nunc vestibulum orci, eget iaculis tellus eros vel enim. Nullam id facilisis tortor. Cras tristique nisl eget sapien consectetur vulputate. </p>
        </section>
					
			</MainPage>
    );
  }
}



export default AboutUs

