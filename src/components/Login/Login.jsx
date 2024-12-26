import { Profiler } from 'react';
import styles from './Login.module.css';
import { useState } from 'react';

const Login = () => {

    const [selected, setSelected] = useState("saas"); // saas or self-hosted

    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <img src="src\assets\images\Subtract.png" alt="" />
                <div className={styles.center}>
                    <div className={styles.card1}>
                        <div className={styles.cardTop}>
                            <img src="src\assets\images\CodeAnt.png" alt="" />
                            <h1>AI to Detect & Autofix Bad Code</h1>
                        </div>
                        <div className={styles.cardBottom}>
                            <div>
                                <div>30+</div>
                                <div>Language Support</div>
                            </div>
                            <div>
                                <div>10k+</div>
                                <div>Developers</div>
                            </div>
                            <div>
                                <div>100k+</div>
                                <div>Hours Saved</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card1}>
                        <div className={styles.cardTop}>
                            <img src="src\assets\images\chart.png" alt="" />
                            <div>
                                <div className={styles.Profit}>14%</div>
                                <div>this week</div>
                            </div>
                        </div>
                        <div className={styles.cardBottom}>
                            <div>Issues Fixed</div>
                            <div>500K+</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.center}>
                    <div className={styles.centerTop}>
                        <div className={styles.brandName}>
                            <img src="src\assets\images\CodeAnt.png" alt="" />
                            <div>CodeAnt AI</div>
                        </div>
                        <div className={styles.Welcome}>Welcome to CodeAnt AI</div>
                        <div className={styles.buttons}>
                            <button
                                onClick={() => { setSelected('saas') }}
                                style={{
                                    backgroundColor: selected === 'saas' ? '#1570ef' : '#f0f0f0',
                                    color: selected === 'saas' ? '#fff' : '#000',
                                     border: selected === 'saas' ? '2px solid #3d79e1d5' : 'none'
                                }}
                            >SAAS</button>
                            <button
                                onClick={() => { setSelected('self-hosted') }}
                                style={{
                                    backgroundColor: selected === 'self-hosted' ? '#1570ef' : '#f0f0f0',
                                    color: selected === 'self-hosted' ? '#fff' : '#000',
                                    border: selected === 'self-hosted' ? '2px solid #3d79e1d5' : 'none'
                                }}
                            >Self Hosted</button>
                        </div>
                    </div>
                    <div className={styles.centerBottom}>
                        {selected === "saas" ? <>
                            <SocialMediaButton text="Sign In With Github" icon="src\assets\images\Git.png" />
                            <SocialMediaButton text="Sign In With Bitbucket" icon="src\assets\images\BitBucket.png" />
                            <SocialMediaButton text="Sign In With Azure Devops" icon="src\assets\images\Azure.png" />
                            <SocialMediaButton text="Sign In With GitLab" icon="src\assets\images\GitLab.png" />
                        </> : <>
                            <SocialMediaButton text="Self Hosted GitLab" icon="src\assets\images\GitLab.png" />
                            <SocialMediaButton text="Sign In With SSO" icon="src\assets\images\a.png" />
                        </>}
                    </div>
                </div>
                <div className={styles.policy}>By signing up you agree to the <span>Privacy Policy</span>.</div>
            </div>
        </div>
    );
}


const SocialMediaButton = ({ text, icon }) => {
    return <div className={styles.socialMediaButton}>
        <img src={icon} alt="" />
        <div>{text}</div>
    </div>
}
export default Login;