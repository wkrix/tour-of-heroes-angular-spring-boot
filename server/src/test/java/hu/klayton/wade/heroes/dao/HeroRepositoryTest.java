package hu.klayton.wade.heroes.dao;

import hu.klayton.wade.heroes.domain.Hero;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Collection;

import static org.assertj.core.api.Assertions.assertThat;


/**
 * @author Walter Krix <wkrix89@gmail.com>
 */
@RunWith(SpringRunner.class)
@SpringBootTest
@DataJpaTest
public class HeroRepositoryTest {

    @Autowired
    private HeroRepository heroRepository;

    @Test
    public void findByName() throws Exception {
        Collection<Hero> foundHeroes = heroRepository.findByName("man");
        assertThat(foundHeroes.size() == 3);
    }

}