import { Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';
import { useStorage } from '@/hooks/useStorage';
import { getUniqueID } from '@/helpers/unique-id.helper';
import { LanguagesSectionItem } from '../sections/languages';
import { SkillSectionItem } from '../sections/skills';
import { WorkSectionItem } from '../sections/work';
import { SchoolSectionItem } from '../sections/school';

export default function CvPdf(){

    const [common, _common] = useStorage('local', 'common', {})
    const [profile, _profile] = useStorage('local', 'profile', '')
    const [skills, _skills] = useStorage('local', 'skillItems', [])
    const [school, _school] = useStorage('local', 'schoolItems', [])
    const [work, _work] = useStorage('local', 'workItems', [])
    const [languages, _languages] = useStorage('local', 'languagesItems', [])
    const [loisirsItems, _loisirsItems] = useStorage('local', 'loisirsItems', [])

    // Create styles
    const styles = StyleSheet.create({
        header: {
            backgroundColor: '#023e8a',
            paddingHorizontal: '20px',
            paddingVertical: '20px',
            color: 'white',
        },
        flexHorizontal: {
            flexDirection: 'row',
        },
        flexSpaceBetween: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        mainContent: {
            marginTop: '15px',
            flexDirection: 'row',
            color: 'black'
        },
        firstColumn: {
            width: '35%',
            paddingHorizontal: '20px'
        },
        secondColumn: {
            width: '65%',
            paddingLeft: '5px',
            paddingRight: '20px'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        },
        title: {
            fontSize: 16,
            fontWeight: 'bold',
            borderBottom: '1px',
            paddingBottom: '2px',
            marginBottom: '5px',
            marginTop: '10px'
        },
        personnal_subtitle: {
            marginTop: '10px',
            fontSize: 12,
            fontWeight: 'demibold',
        },
        personnal_value: {
            marginTop: '4px',
            fontSize: 11,
        },

        section_title: {
            fontSize: 14,
            fontWeight: 'extrabold',
            marginBottom: '3px',
            marginTop: '8px'
        },
        section_subtitle: {
            fontSize: 12,
            fontWeight: 'extrabold',
            fontStyle: 'italic',
            marginBottom: '2px',
            color: '#252525'
        },
        section_value: {
            fontSize: 11,
        },
  });

    return(
        <Document>
            <Page size="A4">
                <View style={styles.header}>
                    <Text>Curriculum Vitae</Text>
                </View>
                <View style={styles.mainContent}>
                    <View style={styles.firstColumn}>
                        <Text style={styles.title}>Données personnelles</Text>
                        <View>
                            <Text style={styles.personnal_subtitle}>Nom</Text>
                            <Text style={styles.personnal_value}>{common.firstName && `${common.firstName} `}{common.lastName}</Text>
                        </View>
                        {(common.phoneNumber && common.phoneNumber !== '') &&
                            <View>
                                <Text style={styles.personnal_subtitle}>Téléphone</Text>
                                <Text style={styles.personnal_value}>{common.phoneNumber}</Text>
                            </View>
                        }
                        {(common.email && common.email !== '') &&
                            <View>
                                <Text style={styles.personnal_subtitle}>Adresse e-mail</Text>
                                <Text style={styles.personnal_value}>{common.email}</Text>
                            </View>
                        }
                        {(common.linkedin && common.linkedin !== '') &&
                            <View>
                                <Text style={styles.personnal_subtitle}>Linkedin</Text>
                                <Text style={styles.personnal_value}>{common.linkedin}</Text>
                            </View>
                        }
                        {(common.website && common.website !== '') &&
                            <View>
                                <Text style={styles.personnal_subtitle}>Site Web</Text>
                                <Text style={styles.personnal_value}>{common.website}</Text>
                            </View>
                        }
                        {(common.drivingLicense && common.drivingLicense !=='') &&
                            <View>
                                <Text style={styles.personnal_subtitle}>{common.drivingLicense}</Text>
                            </View>
                        }
                    </View>
                    <View style={styles.secondColumn}>
                        {profile !== undefined && profile !== '' && <Text style={styles.section_value}>{profile}</Text>}
                        
                        {(school && school.length !== 0) &&
                            <>
                                <Text style={styles.title}>Formation</Text>
                                {school.map((item: SchoolSectionItem) => (
                                    <View key={item.schoolName}>
                                        <Text style={styles.section_title}>{item.schoolName}</Text>
                                        <Text style={styles.section_subtitle}>de {item.from} à {item.to} - {item.formation}</Text>
                                        <Text style={styles.section_value}>{item.description}</Text>
                                    </View>
                                ))}
                            </>
                        }

                        {(work && work.length !== 0) && 
                            <>
                                <Text style={styles.title}>Expériences</Text>
                                {work.map((item: WorkSectionItem) => (
                                    <View key={item.employer}>
                                        <Text style={styles.section_title}>{item.employer}</Text>
                                        <Text style={styles.section_subtitle}>de {item.from} à {item.to} - {item.functionName}</Text>
                                        <Text style={styles.section_value}>{item.description}</Text>
                                    </View>
                                ))}
                            </>
                        }

                        {(skills && skills.length !== 0) && 
                            <>
                                <Text style={styles.title}>Compétences</Text>
                                <View key={getUniqueID('sk')} style={{...styles.flexHorizontal, ...{ marginTop: '5px'}}}>
                                    {skills.map((item: SkillSectionItem, index: number) => (
                                        <Text key={item.index} style={styles.section_value}>{item.value} {index !== skills.length -1 && ','}</Text>
                                    ))}
                                </View>
                            </>
                        }

                        {(languages && languages.length !==0) &&
                            <>
                                <Text style={styles.title}>Langues</Text>
                                {languages.map((item: LanguagesSectionItem ) => (
                                    <View key={item.language} style={{...styles.flexSpaceBetween, ...{marginTop: '5px'}}}>
                                        <Text style={styles.section_subtitle}>{item.language}</Text>
                                        <Text style={styles.section_value}>{item.level}</Text>
                                    </View>
                                ))}
                            </>
                        }

                        {(loisirsItems && loisirsItems.length !== 0) && 
                            <>
                                <Text style={styles.title}>Loisirs</Text>
                                <View key={getUniqueID('lois')} style={{...styles.flexHorizontal, ...{ marginTop: '5px'}}}>
                                    {loisirsItems.map((item: SkillSectionItem, index: number) => (
                                        <Text key={item.index} style={styles.section_value}>{item.value}{index !== loisirsItems.length -1 && ','} </Text>
                                    ))}
                                </View>
                            </>
                        }
                    </View>
                </View>
            </Page>
        </Document>
    );
}