# LaMP Project Page

Project page for **LaMP: Learning Vision-Language-Action Policy with 3D Scene Flow as Latent Motion Prior** (ECCV 2026).

- 🌐 **Live page:** https://summerwxk.github.io/lamp-project-page/
- 📄 **Paper:** https://arxiv.org/pdf/2603.25399
- 💻 **Code:** https://github.com/SummerWXK/LaMP

## About

LaMP is a dual-expert Vision-Language-Action framework that embeds dense 3D scene flow as a *latent motion prior* for robotic manipulation. A flow-matching **Motion Expert** produces one-step partially denoised 3D scene flow, and its hidden states condition an **Action Expert** through gated cross-attention — providing geometric foresight without full multi-step reconstruction.

**Highlights**

- **98.3%** average success on LIBERO (state-of-the-art)
- **+9.7%** robustness gain on LIBERO-Plus zero-shot OOD perturbations
- **79.2%** on SimplerEnv-WidowX
- Consistent real-world gains across pick-and-place, deformable, long-horizon, and OOD tasks

## Citation

```bibtex
@inproceedings{wang2026lamp,
  title={LaMP: Learning Vision-Language-Action Policy with 3D Scene Flow as Latent Motion Prior},
  author={Wang, Xinkai and Wang, Chenyi and Xu, Yifu and Ye, Mingzhe and Zhang, Fucheng and Tian, Jialin and Zhan, Xinyu and Zhu, Lifeng and Lu, Cewu and Yang, Lixin},
  booktitle={European Conference on Computer Vision (ECCV)},
  year={2026}
}
```

## Acknowledgements

The website template is inspired by [R3DP](https://dazazh.github.io/r3dp-project-page/).

## License

Released under the [Apache 2.0 License](LICENSE).
