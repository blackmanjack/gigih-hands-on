const Trending = () => {

    
  return (
    <>
      {/* <Header /> */}
      <div className="container" style={{ marginBottom: "54px" }}>
        <div className="search-box">
          <input
            className={this.state.error ? "invalid" : ""}
            value={this.state.search}
            onChange={this.handleInputSearch}
            placeholder="Search all GIFs and sticker"
          />

          <button onClick={this.handleSubmit}>Search</button>
        </div>
        <div className="limit-box">
          <p>Limit</p>
          <select value={this.state.limit} onChange={this.handleOption}>
            <option>10</option>
            <option>12</option>
            <option>20</option>
            <option>30</option>
          </select>
        </div>
        <p style={{ color: "red" }}>
          {this.state.error
            ? "Maaf kolom input anda kosong. Harap isi terlebih dahulu"
            : ""}
        </p>
        <p>Hasil pencarian sebanyak {this.state.data.length}</p>
        <div className="list-item">
          {this.state.isLoading ? (
            <div>Loading..</div>
          ) : (
            this.state.data.map((item) => (
              <GiphyItem key={item.id} data={item} />
            ))
          )}
        </div>
      </div>
    </>
  );
};
